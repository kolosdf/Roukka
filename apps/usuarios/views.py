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

class listar_usuario(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class crear_usuario(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class modificar_usuario(generics.UpdateAPIView): 
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer