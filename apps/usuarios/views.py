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
from rest_framework import generics, permissions
from rest_framework.parsers import FormParser
from knox.models import AuthToken
import json

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
            e.tipo = e.rol
            e.save()
            return Response({"empleado": empleado.data, "token": AuthToken.objects.create(e)[1]}, status=status.HTTP_201_CREATED)
        else:
            return Response(empleado.errors, status=status.HTTP_400_BAD_REQUEST)


class modificar_empleado(generics.RetrieveUpdateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoModificarSerializer

    def put(self, request, *args, **kwargs):

        empleado = self.get_object()
        serializer = EmpleadoModificarSerializer(empleado, data=request.data)

        if serializer.is_valid():
            e = serializer.save()
            e.username = serializer.data['email']
            e.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class listar_empleado(generics.ListAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoListaSerializer


"""
class desactivar_empleado(generics.UpdateAPIView):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoDesactivarSerializer
"""
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
            e.tipo = 'Cliente'
            e.save()
            return Response({"cliente": cliente.data, "token": AuthToken.objects.create(e)[1]}, status=status.HTTP_201_CREATED)
        else:
            return Response(cliente.errors, status=status.HTTP_400_BAD_REQUEST)


class modificar_cliente(generics.RetrieveUpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteModificarSerializer

    def put(self, request, *args, **kwargs):

        cliente = self.get_object()
        serializer = ClienteModificarSerializer(cliente, data=request.data)

        if serializer.is_valid():
            e = serializer.save()
            e.username = serializer.data['email']
            e.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class listar_cliente(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteListaSerializer

class ubicacion_cliente(generics.RetrieveUpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = UbicacionSerializer

class tarjeta_cliente(generics.RetrieveUpdateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = TarjetaSerializer

class exportar_cliente(generics.ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteListaSerializer

    def get(self, request, *args, **kwargs):
        clientes = Cliente.objects.all()
        serializer = self.serializer_class(clientes, many=True)

        with open('clientes.json', 'w') as file:
            json.dump(serializer.data, file, indent=4)
        
        return Response({'msj': "Archivo exportado"})


"""
CRUD DE GERENTE Y ADMIN DE ROUKKA
"""


class crear_usuario(generics.CreateAPIView):
    serializer_class = UsuarioSerializer

    def post(self, request, *args, **kwargs):

        usuario = self.get_serializer(data=request.data)
        usuario.is_valid(raise_exception=True)
        if usuario.is_valid():
            e = usuario.save()
            e.username = usuario.data['email']
            e.is_superuser = True
            e.tipo = 'Administrador'
            e.save()
            return Response({"usuario": usuario.data, "token": AuthToken.objects.create(e)[1]}, status=status.HTTP_201_CREATED)
        else:
            return Response(usuario.errors, status=status.HTTP_400_BAD_REQUEST)


class listar_usuario(generics.ListAPIView):
    queryset = Usuario.objects.filter(is_superuser=True)
    serializer_class = UsuarioListarSerializer


class modificar_usuario(generics.RetrieveUpdateAPIView):
    queryset = Usuario.objects.filter(is_superuser=True)
    serializer_class = UsuarioModificarSerializer

    def put(self, request, *args, **kwargs):

        usuario = self.get_object()
        serializer = UsuarioModificarSerializer(usuario, data=request.data)

        if serializer.is_valid():
            e = serializer.save()
            e.username = serializer.data['email']
            e.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        usuario = serializer.validated_data
        return Response({
            "usuario": UsuarioSerializer(usuario, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(usuario)[1]

        })


# Get User API

class UserAPI(generics.RetrieveAPIView):
    permission_classes = {
        permissions.IsAuthenticated
    }
    serializer_class = UsuarioSerializer

    def get_object(self):
        return self.request.user
