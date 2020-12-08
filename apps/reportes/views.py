from django.shortcuts import render
from .serializers import *
from apps.ventas.models import *
from django.db.models import Avg, Count, Min, Sum
from datetime import *
from dateutil.relativedelta import *
import calendar
from datetime import datetime
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

class ventas_totales(generics.ListAPIView):
    queryset = Factura.objects.all()
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):
        mes0 = datetime.now().month
        mes1 = (datetime.now()+relativedelta(months=-1)).month
        mes2 = (datetime.now()+relativedelta(months=-2)).month
        mes3 = (datetime.now()+relativedelta(months=-3)).month
        mes4 = (datetime.now()+relativedelta(months=-4)).month
        mes5 = (datetime.now()+relativedelta(months=-5)).month
        mes6 = (datetime.now()+relativedelta(months=-6)).month

        ventas_mes0 = Factura.objects.filter(fecha__month=mes0).aggregate(total=Sum('total'))
        ventas_mes1 = Factura.objects.filter(fecha__month=mes1).aggregate(total=Sum('total'))
        ventas_mes2 = Factura.objects.filter(fecha__month=mes2).aggregate(total=Sum('total')) 
        ventas_mes3 = Factura.objects.filter(fecha__month=mes3).aggregate(total=Sum('total'))
        ventas_mes4 = Factura.objects.filter(fecha__month=mes4).aggregate(total=Sum('total'))
        ventas_mes5 = Factura.objects.filter(fecha__month=mes5).aggregate(total=Sum('total'))
        ventas_mes6 = Factura.objects.filter(fecha__month=mes6).aggregate(total=Sum('total'))

        ventas2_mes0 = Factura2.objects.filter(fecha__month=mes0).aggregate(total=Sum('total'))
        ventas2_mes1 = Factura2.objects.filter(fecha__month=mes1).aggregate(total=Sum('total'))
        ventas2_mes2 = Factura2.objects.filter(fecha__month=mes2).aggregate(total=Sum('total'))
        ventas2_mes3 = Factura2.objects.filter(fecha__month=mes3).aggregate(total=Sum('total'))
        ventas2_mes4 = Factura2.objects.filter(fecha__month=mes4).aggregate(total=Sum('total'))
        ventas2_mes5 = Factura2.objects.filter(fecha__month=mes5).aggregate(total=Sum('total'))
        ventas2_mes6 = Factura2.objects.filter(fecha__month=mes6).aggregate(total=Sum('total'))

        if ventas_mes0['total'] == None:
            ventas_mes0['total'] = 0
        if ventas2_mes0['total'] == None:
            ventas2_mes0['total'] = 0

        if ventas_mes1['total'] == None:
            ventas_mes1['total'] = 0
        if ventas2_mes1['total'] == None:
            ventas2_mes1['total'] = 0

        if ventas_mes2['total'] == None:
            ventas_mes2['total'] = 0
        if ventas2_mes2['total'] == None:
            ventas2_mes2['total'] = 0

        if ventas_mes3['total'] == None:
            ventas_mes3['total'] = 0
        if ventas2_mes3['total'] == None:
            ventas2_mes3['total'] = 0

        if ventas_mes4['total'] == None:
            ventas_mes4['total'] = 0
        if ventas2_mes4['total'] == None:
            ventas2_mes4['total'] = 0

        if ventas_mes5['total'] == None:
            ventas_mes5['total'] = 0
        if ventas2_mes5['total'] == None:
            ventas2_mes5['total'] = 0

        if ventas_mes6['total'] == None:
            ventas_mes6['total'] = 0
        if ventas2_mes6['total'] == None:
            ventas2_mes6['total'] = 0

        datos = {
            'ventas': [
            {
                'mes': switch_mes(mes0),
                'total': ventas2_mes0['total'] + ventas_mes0['total']
            },
            {
                'mes':switch_mes(mes1),
                'total': ventas_mes1['total'] + ventas_mes1['total']
            },
            {
                'mes':switch_mes(mes2),
                'total': ventas_mes2['total'] + ventas_mes2['total']
            },
            {
                'mes':switch_mes(mes3),
                'total': ventas_mes3['total'] + ventas_mes3['total']
            },
            {
                'mes':switch_mes(mes4),
                'total': ventas_mes4['total'] + ventas_mes4['total']
            },
            {
                'mes':switch_mes(mes5),
                'total': ventas_mes5['total'] + ventas_mes5['total']
            },
            {
                'mes':switch_mes(mes6),
                'total': ventas_mes6['total'] + ventas_mes6['total']
            }
        
            ]
        }
        
        
        return Response(datos, status=status.HTTP_201_CREATED)

def switch_mes(argument):
    switcher = {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octobre",
        11: "Noviembre",
        12: "Diciembre"
    }
    return switcher.get(argument, "Invalid month")

class mas_vendido(generics.ListAPIView):
    queryset = Ventas_Productos.objects.all()
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):
        producto = Ventas_Productos.objects.values('platillo').annotate(total=Sum('cantidad')).order_by('-total')[:20]

        lista = []

        for p in producto:
            platillo = Platillo.objects.get(id=p['platillo'])
            lista.append(
                {
                    'platillo':{
                        'id': p['platillo'],
                        'nombre': platillo.nombre,
                        'imagen': platillo.imagen
                    },
                    'total': p['total']
                }
            )

        dato = {
            'más vendidos': lista,
        }

        return Response(dato)

class ventas_totales_platillo(generics.ListAPIView):
    queryset = Ventas_Productos.objects.all()
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):
        producto = Ventas_Productos.objects.values('platillo').annotate(total=Sum('cantidad')).order_by('-total')[:20]

        lista = []

        for p in producto:
            platillo = Platillo.objects.get(id=p['platillo'])
            total = p['total'] * platillo.precio
            print(total)
            lista.append(
                {
                    'platillo':{
                        'id': p['platillo'],
                        'nombre': platillo.nombre,
                        'imagen': platillo.imagen
                    },
                    'total': total
                }
            )

        dato = {
            'ventas por platillo': lista,
        }

        return Response(dato)

class ventas_mes_platillo(generics.RetrieveAPIView):
    queryset = Ventas_Productos.objects.all()
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):

        pk = kwargs['pk']
        platillo = Platillo.objects.get(id=pk)
        precio = platillo.precio

        mes0 = datetime.now().month
        mes1 = (datetime.now()+relativedelta(months=-1)).month
        mes2 = (datetime.now()+relativedelta(months=-2)).month
        mes3 = (datetime.now()+relativedelta(months=-3)).month
        mes4 = (datetime.now()+relativedelta(months=-4)).month
        mes5 = (datetime.now()+relativedelta(months=-5)).month
        mes6 = (datetime.now()+relativedelta(months=-6)).month

        ventas_mes0 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes0)
        ventas_mes1 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes1)
        ventas_mes2 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes2)
        ventas_mes3 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes3)
        ventas_mes4 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes4)
        ventas_mes5 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes5)
        ventas_mes6 = Productos_Factura.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes6)

        ventas2_mes0 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes0)
        ventas2_mes1 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes1)
        ventas2_mes2 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes2)
        ventas2_mes3 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes3)
        ventas2_mes4 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes4)
        ventas2_mes5 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes5)
        ventas2_mes6 = Productos_Factura2.objects.values('platillo').annotate(total=Sum('cantidad')).filter(platillo_id=pk, factura__fecha__month=mes6)

        if ventas_mes0.exists():
            v_mes0 = {'platillo': pk, 'total': ventas_mes0[0]['total']}
        else:
            v_mes0 = {'platilo': pk, 'total': 0}

        if ventas2_mes0.exists():
            v2_mes0 = {'platillo': pk, 'total': ventas2_mes0[0]['total']}
        else:
            v2_mes0 = {'platilo': pk, 'total': 0}

        if ventas_mes1.exists():
            v_mes1 = {'platillo': pk, 'total': ventas_mes1[0]['total']}
        else:
            v_mes1 = {'platilo': pk, 'total': 0}

        if ventas2_mes1.exists():
            v2_mes1 = {'platillo': pk, 'total': ventas2_mes1[0]['total']}
        else:
            v2_mes1 = {'platilo': pk, 'total': 0}

        if ventas_mes2.exists():
            v_mes2 = {'platillo': pk, 'total': ventas_mes2[0]['total']}
        else:
            v_mes2 = {'platilo': pk, 'total': 0}

        if ventas2_mes2.exists():
            v2_mes2 = {'platillo': pk, 'total': ventas2_mes2[0]['total']}
        else:
            v2_mes2 = {'platilo': pk, 'total': 0}

        if ventas_mes3.exists():
            v_mes3 = {'platillo': pk, 'total': ventas_mes3[0]['total']}
        else:
            v_mes3 = {'platilo': pk, 'total': 0}

        if ventas2_mes3.exists():
            v2_mes3 = {'platillo': pk, 'total': ventas2_mes3[0]['total']}
        else:
            v2_mes3 = {'platilo': pk, 'total': 0}

        if ventas_mes4.exists():
           v_mes4 = {'platillo': pk, 'total': ventas_mes4[0]['total']}
        else:
            v_mes4 = {'platilo': pk, 'total': 0}

        if ventas2_mes4.exists():
            v2_mes4 = {'platillo': pk, 'total': ventas2_mes4[0]['total']}
        else:
            v2_mes4 = {'platilo': pk, 'total': 0}

        if ventas_mes5.exists():
            v_mes5 = {'platillo': pk, 'total': ventas_mes5[0]['total']}
        else:
            v_mes5 = {'platilo': pk, 'total': 0}

        if ventas2_mes5.exists():
            v2_mes5 = {'platillo': pk, 'total': ventas2_mes5[0]['total']}
        else:
           v2_mes5 = {'platilo': pk, 'total': 0}

        if ventas_mes6.exists():
            v_mes6 = {'platillo': pk, 'total': ventas_mes6[0]['total']}
        else:
            v_mes6 = {'platilo': pk, 'total': 0}

        if ventas2_mes6.exists():
            v2_mes6 = {'platillo': pk, 'total': ventas2_mes6[0]['total']}
        else:
            v2_mes6 = {'platilo': pk, 'total': 0}

        datos = {
            'platillo':{
                'id': platillo.id,
                'nombre': platillo.nombre,
                'imagen': platillo.imagen
            },
            'ventas': [
            {
                'mes': switch_mes(mes0),
                'total': (v_mes0['total'] + v2_mes0['total']) * precio
            },
            {
                'mes':switch_mes(mes1),
                'total': (v_mes1['total'] + v2_mes1['total']) * precio
            },
            {
                'mes':switch_mes(mes2),
                'total': (v_mes2['total'] + v2_mes2['total']) * precio
            },
            {
                'mes':switch_mes(mes3),
                'total': (v_mes3['total'] + v2_mes3['total']) * precio
            },
            {
                'mes':switch_mes(mes4),
                'total': (v_mes4['total'] + v2_mes4['total']) * precio
            },
            {
                'mes':switch_mes(mes5),
                'total': (v_mes5['total'] + v2_mes5['total']) * precio
            },
            {
                'mes':switch_mes(mes6),
                'total': (v_mes6['total'] + v2_mes6['total']) * precio
            }
        
            ]
        }
        
        
        return Response(datos, status=status.HTTP_201_CREATED)

class mas_ventas_clientes(generics.ListAPIView):
    queryset = Ventas_Productos
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):
        resultado = Factura.objects.values('cliente').annotate(total=Sum('total')).order_by('-total')[:20]

        lista = []

        for p in resultado:
            cliente = Cliente.objects.get(id=p['cliente'])
            lista.append(
                {
                    'cliente':{
                        'id': p['cliente'],
                        'nombre': cliente.first_name,
                        'apellido': cliente.last_name,
                        'email': cliente.email
                    },
                    'total': p['total']
                }
            )

        dato = {
            'clientes con más compras': lista,
        }

        return Response(dato)

class bajas_existencias(generics.ListAPIView):
    queryset = Platillo
    serializer_class = BajaExistencia

    def get(self, request, *args, **kwargs):

        platillos = Platillo.objects.filter(unidades__lt=10)

        serializer = self.serializer_class(platillos, many=True)

        return Response(serializer.data)

class mas_ventas_empleados(generics.ListAPIView):
    queryset = Ventas_Productos
    serializer_class = VentasTotales

    def get(self, request, *args, **kwargs):
        resultado = Factura2.objects.values('empleado').annotate(total=Sum('total')).order_by('-total')[:20]

        lista = []

        for p in resultado:
            empleado = Empleado.objects.get(id=p['empleado'])
            lista.append(
                {
                    'empleado':{
                        'id': p['empleado'],
                        'nombre': empleado.first_name,
                        'apellido': empleado.last_name,
                        'email': empleado.email
                    },
                    'total': p['total']
                }
            )

        dato = {
            'empleados con más ventas': lista,
        }

        return Response(dato)



