from django.shortcuts import render
from django.contrib import messages
from django.conf import settings
from rest_framework.response import Response
from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.parsers import FormParser

# Create your views here.

def home(request):
    pass

class listar_empresa(generics.ListAPIView):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()

class crear_empresa(generics.CreateAPIView):
    
    serializer_class = EmpresaSerializer
    #parser_classes = FormParser

    def post(self, request, *args, **kwargs):
        
        empresa = self.serializer_class(data=request.data)
        

        if empresa.is_valid():
            
            try:
                with transaction.atomic():
                    modelo = empresa.save()
                    dominio = Dominio(domain='%s%s' % (empresa.data['schema_name'], settings.DOMAIN), is_primary=True, tenant=modelo)
                    dominio.save()
                    return Response(empresa.data, status=status.HTTP_201_CREATED)   
            except Exception:
                return Response(empresa.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(empresa.errors, status=status.HTTP_400_BAD_REQUEST)
        

class modificar_empresa(generics.UpdateAPIView): 
    queryset = Empresa.objects.all()
    serializer_class = EmpresaModificarSerializer

class crear_funcion(generics.CreateAPIView):
    queryset = Funciones.objects.all()
    serializer_class = FuncionesSerializer

class crear_plan(generics.CreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer