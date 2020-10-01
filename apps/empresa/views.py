from django.shortcuts import render
from django.contrib import messages
from django.conf import settings
from rest_framework.response import Response
from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .serializers import *

# Create your views here.

def home(request):
    pass

def listar_empresa(APIView):

    def get(self, request):
        empresas =Empresa.objects.all()
        serializer = EmpresaSerializer(empresas, many=True)
        return Response(serializer.data)

def crear_empresa(APIView):

    def post(self, request):
        
        empresa = EmpresaSerializer(data=request.data)

        if empresa.is_valid():
            try:
                """
                La operación se maneja como transaccional dado que involucra la creación de más de un objeto los cuales
                estan relacionados
                """
                with transaction.atomic():
                    empresa.save()
                    """
                    Se crea el dominio y se le asocia información alojada en el tenant. En este punto es que sucede la
                    creación del esquema del tenant en la base de datos
                    """
                    Dominio.objects.create(domain='%s%s' % (empresa.schema_name, settings.DOMAIN), is_primary=True, tenant=empresa)

                    return Response(empresa.data, status=status.HTTP_201_CREATED)
            except Exception:
                return Response(empresa.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(empresa.errors, status=status.HTTP_400_BAD_REQUEST)
        

def modificar_empresa(APIView):

    def post(self, request):
        empresa = EmpresaModificarSerializer(data=request.data)
        if empresa.is_valid():
            empresa.save()
            return Response(empresa.data, status=status.HTTP_201_CREATED)
        return Response(empresa.errors, status=status.HTTP_400_BAD_REQUEST)


def crear_funcion(APIView):

    def post(self, request):
        funcion = FuncionesSerializer(data=request.data)
        if funcion.is_valid():
            funcion.save()
            return Response(funcion.data, status=status.HTTP_201_CREATED)
        return Response(funcion.errors, status=status.HTTP_400_BAD_REQUEST)

def crear_plan(APIView):

    def post(self, request):
        plan = PlanSerializer(data=request.data)
        if plan.is_valid():
            plan.save()
            return Response(plan.data, status=status.HTTP_201_CREATED)
        return Response(plan.errors, status=status.HTTP_400_BAD_REQUEST)



