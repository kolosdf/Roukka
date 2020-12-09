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
from rest_framework import viewsets, permissions
from rest_framework import generics
from rest_framework.parsers import FormParser
import pandas as pd
import numpy as np

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


class detalle_platillo(generics.RetrieveAPIView):
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


class detalle_menu(generics.RetrieveAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


"""
EXCEL
"""

class exportar_menu(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

    def get(self, request, *args, **kwargs):
        menus = Menu.objects.all()
        ids = []
        nombres = []
        imagenes = []
        descripciones = []
        platillos = []

        for menu in menus:
            ids.append(menu.id)
            nombres.append(menu.nombre)
            imagenes.append(menu.imagen)
            descripciones.append(menu.descripcion)
            p = menu.platillos.all()
            lista = []
            for i in p:
                lista.append(i.id)
            platillos.append(lista)
        
        datos = {
            'id': ids,
            'nombre': nombres,
            'imagen': imagenes,
            'descripcion': descripciones,
            'platillos': platillos
        }

        df = pd.DataFrame(datos, columns = ['id','nombre', 'imagen', 'descripcion', 'platillos'])
        df.to_excel('menus.xlsx', sheet_name='menus')

        return Response({'msj': "Archivo descargado"})

class importar_menu(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

    def get(self, request, *args, **kwargs):

        df = pd.read_excel('menus.xlsx', sheet_name='menus')

        ids = df['id']
        nombres = df['nombre']
        imagenes = df['imagen']
        descripciones = df['descripcion']
        platillos = df['platillos']
        max = len(ids)

        """ids.astype(int)
        print(ids)"""

        for i in range(max):
            if np.isnan(ids[i]):
                p = Menu(nombre=nombres[i], imagen=imagenes[i], descripcion=descripciones[i])
                p.save()
                max2 = len(platillos[i])

                for j in range(max2):
                    try:
                        pl = Platillo.objects.get(id=platillos[i][j])
                        p.platillos.add(pl)
                    except:
                        continue
                print(p)
                print(p.platillos.all())

            else:
                p = Menu.objects.get(id=ids[i].astype(int))
                p.nombre = nombres[i]
                p.imagen = imagenes[i]
                p.descripcion = descripciones[i]
                p.save()
                max2 = len(platillos[i])
                
                lista_platillos = []
                
                for j in range(max2):
                    try:
                        pl = Platillo.objects.get(id=platillos[i][j])
                        lista_platillos.append(pl)
                    except:
                        continue
                
                p.platillos.set(lista_platillos)
                    
                print(p.nombre)
                print(p.platillos.all())


        return Response({'msj': "Archivo cargado"})

