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
CRUD DE INGREDIENTES
"""
class crear_ingrediente(generics.CreateAPIView):
    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer

class modificar_ingrediente(generics.RetrieveUpdateAPIView):
    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer

class listar_ingrediente(generics.ListAPIView):
    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer

"""
CRUD DE PLATILLOS
"""
class crear_platillo(generics.CreateAPIView):
    queryset = Platillo.objects.all()
    serializer_class = PlatilloSerializer

class modificar_platillo(generics.RetrieveUpdateAPIView):
    queryset = Platillo.objects.all()
    serializer_class = PlatilloSerializer

class listar_platillo(generics.ListAPIView):
    queryset = Platillo.objects.all()
    serializer_class = PlatilloSerializer

"""
CRUD DE MENUS
"""
class crear_menu(generics.CreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class modificar_menu(generics.RetrieveUpdateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class listar_menu(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer