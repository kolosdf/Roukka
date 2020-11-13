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


class agregar_carrito(generics.CreateAPIView):
    serializer_class = ProductosAgregarSerializer

    def post(self, request, *args, **kwargs):
        
        registro = self.serializer_class(data=request.data)
        
        if registro.is_valid():
            e = registro.save()
            carrito = e.carrito
            platillos = Productos_Carrito.objects.filter(carrito=carrito)
            total = 0
            for platillo in platillos:
                total = total + (platillo.platillo.precio * platillo.cantidad)
            carrito.total = total
            carrito.save()

            return Response(registro.data, status=status.HTTP_201_CREATED)  
        else:
            return Response(registro.errors, status=status.HTTP_400_BAD_REQUEST)

class consultar_carrito(generics.RetrieveAPIView):
    queryset = Productos_Carrito.objects.all()
    serializer_class = ProductosSerializer

    def get(self, request, *args, **kwargs):
        carrito = Carrito.objects.get(id=kwargs['pk'])
        platillos = Productos_Carrito.objects.filter(carrito=carrito)
       
        serializer = self.serializer_class(platillos, many=True)
        serializer2 = CarritoSerializer(carrito)

        datos = {
            'carrito': serializer2.data,
            'productos': serializer.data
        }

        return Response(datos, status=status.HTTP_201_CREATED)


