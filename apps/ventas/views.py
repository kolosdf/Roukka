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
from apps.usuarios.serializers import Empleado 
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.parsers import FormParser
from django.http import JsonResponse

"""
CARRITO
"""
class agregar_carrito(generics.CreateAPIView):
    serializer_class = ProductosAgregarSerializer

    def post(self, request, *args, **kwargs):
        
        registro = self.serializer_class(data=request.data)
        
        if registro.is_valid():
            producto = registro.validated_data['platillo']
            if producto.unidades < registro.validated_data['cantidad']:
                return Response({'error': "Unidades disponibles insuficientes"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                with transaction.atomic():
                    e = registro.save()
                    carrito = e.carrito
                    platillos = Productos_Carrito.objects.filter(carrito=carrito)
                    total = 0
                    for platillo in platillos:
                        total = total + (platillo.platillo.precio * platillo.cantidad)
                    carrito.total = total
                    carrito.save()

                    serializer = ProductosSerializer(platillos, many=True)
                    serializer2 = CarritoSerializer(carrito)

                    datos = {
                        'carrito': serializer2.data,
                        'productos': serializer.data
                    }

                    return Response(datos, status=status.HTTP_201_CREATED)  
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

class modificar_carrito(generics.RetrieveUpdateAPIView):
    queryset = Productos_Carrito.objects.all()
    serializer_class = ProductosAgregarSerializer

    def put(self, request, *args, **kwargs):
        
        producto=self.get_object()
        serializer=ProductosSerializer(producto,data=request.data)
        
        if serializer.is_valid():
            if producto.platillo.unidades < serializer.validated_data['cantidad']:
                return Response({'error': "Unidades disponibles insuficientes"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                with transaction.atomic():
                    print(request.data['cantidad'])
                    producto2 = Productos_Carrito.objects.get(id=producto.id)
                    producto2.cantidad = request.data['cantidad']
                    producto2.save()
                    carrito = producto.carrito
                    platillos = Productos_Carrito.objects.filter(carrito=carrito)
                    total = 0
                    for platillo in platillos:
                        total = total + (platillo.platillo.precio * platillo.cantidad)
                    carrito.total = total
                    carrito.save()

                    serializer1 = ProductosSerializer(platillos, many=True)
                    serializer2 = CarritoSerializer(carrito)

                    datos = {
                        'carrito': serializer2.data,
                        'productos': serializer1.data
                    }

                    return Response(datos, status=status.HTTP_201_CREATED)  
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class eliminar_carrito(generics.DestroyAPIView):
    queryset = Productos_Carrito.objects.all()

    def delete(self, request, *args, **kwargs):
        producto=self.get_object()
        carrito = producto.carrito
        producto.delete()

        platillos = Productos_Carrito.objects.filter(carrito=carrito)
        total = 0
        for platillo in platillos:
            total = total + (platillo.platillo.precio * platillo.cantidad)
        carrito.total = total
        carrito.save()

        serializer1 = ProductosSerializer(platillos, many=True)
        serializer2 = CarritoSerializer(carrito)

        datos = {
            'carrito': serializer2.data,
            'productos': serializer1.data
        }

        return Response(datos, status=status.HTTP_201_CREATED)  

        




"""
FACTURAS CLIENTE
"""

class factura(generics.CreateAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

    """def post(self, request, *args, **kwargs):
        
        factura = self.serializer_class(data=request.data)
        
        if factura.is_valid():
            bandera = True
            errores = []
            cliente = Cliente.objects.get(id=request.data['cliente'])
            p = Productos_Carrito.objects.filter(carrito=cliente.carrito)
            for i in p:
                if i.cantidad > i.platillo.unidades:
                    bandera = False
                    errores.append("No hay suficientes unidades disponibles de %s" % (i.platillo.nombre))
            
            if bandera:
                with transaction.atomic():
                    e = factura.save()
                    e.direccion = e.cliente.direccion
                    carrito = e.cliente.carrito
                    e.total = carrito.total
                    e.save()
                    platillos = Productos_Carrito.objects.filter(carrito=carrito)
            
                    for platillo in platillos:
                        Productos_Factura.objects.create(factura=e,platillo=platillo.platillo,cantidad=platillo.cantidad)
                        Ventas_Productos.objects.create(platillo=platillo.platillo,cantidad=platillo.cantidad)
                        platillo.platillo.unidades = platillo.platillo.unidades - platillo.cantidad
                        platillo.platillo.save()
                    
                    platillos.delete()
                    carrito.total = 0
                    carrito.save()
                    productos = Productos_Factura.objects.filter(factura=e)

                    facturaS = FacturaMostrarSerializer(e)
                    productosS = ProductosFacturaSerializer(productos, many=True)

                    datos={
                        'factura': facturaS.data,
                        'productos': productosS.data
                    }

                    return Response(datos, status=status.HTTP_201_CREATED)  
            else:
                return Response({'error': errores}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(factura.errors, status=status.HTTP_400_BAD_REQUEST)"""

    def post(self, request, *args, **kwargs):
        with transaction.atomic():
            id_cliente = request.data['cliente']
            productos = request.data['productos']
            bandera = True
            errores = []

            for i in productos:
                p = Platillo.objects.get(id=i['platillo'])
                if i['cantidad'] > p.unidades:
                    bandera = False
                    errores.append("No hay suficientes unidades disponibles de %s" % (p.nombre))
            if bandera:
                cliente = Cliente.objects.get(id=id_cliente)

                factura = Factura.objects.create(cliente=cliente,direccion=cliente.direccion,total=0)

                total = 0

                for producto in productos:
                    platillo = Platillo.objects.get(id=producto['platillo'])
                    Productos_Factura(platillo=platillo, cantidad=producto['cantidad'], factura=factura).save()
                    Ventas_Productos.objects.create(platillo=platillo,cantidad=producto['cantidad'])
                    total = total + (platillo.precio * producto['cantidad'])
                    platillo.unidades = platillo.unidades - producto['cantidad']
                    platillo.save()

                factura.total = total
                factura.save()
                productos_factura = Productos_Factura.objects.filter(factura=factura)
                p = ProductosFacturaSerializer(productos_factura, many=True)
                e = FacturaMostrarSerializer(factura)

                datos ={
                    'factura': e.data,
                    'productos': p.data
                }

                return Response(datos, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': errores}, status=status.HTTP_400_BAD_REQUEST)


        """
        {
            "cliente": 3,
            "productos":[
                {
                    "cantidad": 2,
                    "platillo": 1
                },
                {
                    "cantidad": 2,
                    "platillo": 2
                }
            ]
        }

        """


class consultar_factura(generics.ListAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaMostrarSerializer 

    def get(self, request, *args, **kwargs):
        id_cliente = kwargs['pk']
        facturas = Factura.objects.filter(cliente__id=id_cliente)
        f = []
        for i in facturas:
            p = Productos_Factura.objects.filter(factura=i)
            s1 = FacturaMostrarSerializer(i)
            s2 = ProductosFacturaSerializer(p, many=True)
            f.append(
                {
                    'factura': s1.data,
                    'productos': s2.data
                }
            )
        
        return Response({'datos': f}, status=status.HTTP_201_CREATED)

class consultar_todas(generics.ListAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaMostrarSerializer

    def get(self, request, *args, **kwargs):
        facturas = Factura.objects.all()
        f = []
        for i in facturas:
            p = Productos_Factura.objects.filter(factura=i)
            s1 = FacturaMostrarSerializer(i)
            s2 = ProductosFacturaSerializer(p, many=True)
            f.append(
                {
                    'factura': s1.data,
                    'productos': s2.data
                }
            )
        
        return Response({'datos': f}, status=status.HTTP_201_CREATED)


"""
FACTURAS EMPLEADO
"""

class factura2(generics.CreateAPIView):
    queryset = Productos_Factura2.objects.all()
    serializer_class = ProductosFactura2Serializer
 

    def post(self, request, *args, **kwargs):
        with transaction.atomic():
            id_empleado = request.data['empleado']
            productos = request.data['productos']
            bandera = True
            errores = []

            for i in productos:
                p = Platillo.objects.get(id=i['platillo'])
                if i['cantidad'] > p.unidades:
                    bandera = False
                    errores.append("No hay suficientes unidades disponibles de %s" % (p.nombre))
            if bandera:
                empleado = Empleado.objects.get(id=id_empleado)

                factura = Factura2.objects.create(empleado=empleado,total=0)

                total = 0

                for producto in productos:
                    platillo = Platillo.objects.get(id=producto['platillo'])
                    Productos_Factura2(platillo=platillo, cantidad=producto['cantidad'], factura=factura).save()
                    Ventas_Productos.objects.create(platillo=platillo,cantidad=producto['cantidad'])
                    total = total + (platillo.precio * producto['cantidad'])
                    platillo.unidades = platillo.unidades - producto['cantidad']
                    platillo.save()

                factura.total = total
                factura.save()
                productos_factura = Productos_Factura2.objects.filter(factura=factura)
                p = ProductosFactura2Serializer(productos_factura, many=True)
                e = EmpleadoFacturaSerializer(empleado)

                datos ={
                    'empleado': e.data,
                    'factura': {"id": factura.id, "total": factura.total},
                    'productos': p.data
                }

                return Response(datos, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': errores}, status=status.HTTP_400_BAD_REQUEST)


        """
        {
            "empleado": 2,
            "productos":[
                {
                    "cantidad": 2,
                    "platillo": 1
                },
                {
                    "cantidad": 2,
                    "platillo": 2
                }
            ]
        }

        """

class consultar_factura2(generics.ListAPIView):
    queryset = Factura.objects.all()
    serializer_class = Factura2Serializer

    def get(self, request, *args, **kwargs):
        id_empleado = kwargs['pk']
        facturas = Factura2.objects.filter(empleado__id=id_empleado)
        f = []
        for i in facturas:
            p = Productos_Factura2.objects.filter(factura=i)
            s1 = Factura2Serializer(i)
            s2 = ProductosFactura2Serializer(p, many=True)
            f.append(
                {
                    'factura': s1.data,
                    'productos': s2.data
                }
            )
        
        return Response({'datos': f}, status=status.HTTP_201_CREATED)

class consultar_todas2(generics.ListAPIView):
    queryset = Factura2.objects.all()
    serializer_class = Factura2Serializer2

    def get(self, request, *args, **kwargs):
        
        facturas = Factura2.objects.all()
        f = []
        for i in facturas:
            p = Productos_Factura2.objects.filter(factura=i)
            s1 = Factura2Serializer2(i)
            s2 = ProductosFactura2Serializer(p, many=True)
            f.append(
                {
                    'factura': s1.data,
                    'productos': s2.data
                }
            )
        
        return Response({'datos': f}, status=status.HTTP_201_CREATED)



