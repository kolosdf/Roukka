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

"""
CRUD DE EMPLEADOS
"""
class crear_empleado(generics.CreateAPIView):
    serializer_class = EmpleadoSerializer

    def post(self, request, *args, **kwargs):
        
        empleado = self.serializer_class(data=request.data)
        
        if empleado.is_valid():
            e = empleado.save()
            e.username = empleado.data['email']
            e.save()
            return Response(empleado.data, status=status.HTTP_201_CREATED)  
        else:
            return Response(empleado.errors, status=status.HTTP_400_BAD_REQUEST)

class modificar_empleado(generics.UpdateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoModificarSerializer

class listar_empleado(generics.ListAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoListaSerializer

class desactivar_empleado(generics.UpdateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoDesactivarSerializer

"""
CRUD DE CLIENTES
"""
class crear_cliente(generics.CreateAPIView):
    serializer_class = ClienteSerializer

    def post(self, request, *args, **kwargs):
        
        cliente = self.serializer_class(data=request.data)
        
        if cliente.is_valid():
            e = cliente.save()
            e.username = cliente.data['email']
            e.save()
            return Response(cliente.data, status=status.HTTP_201_CREATED)  
        else:
            return Response(cliente.errors, status=status.HTTP_400_BAD_REQUEST)

class modificar_cliente(generics.UpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteModificarSerializer

class listar_cliente(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteListaSerializer


"""
CRUD DE GERENTE Y ADMIN DE ROUKKA
"""
class crear_usuario(generics.CreateAPIView):
    serializer_class =UsuarioSerializer

    def post(self, request, *args, **kwargs):
        
        usuario = self.serializer_class(data=request.data)
        
        if usuario.is_valid():
            e = usuario.save()
            e.username = usuario.data['email']
            e.is_superuser = True
            e.save()
            return Response(usuario.data, status=status.HTTP_201_CREATED)  
        else:
            return Response(usuario.errors, status=status.HTTP_400_BAD_REQUEST)


