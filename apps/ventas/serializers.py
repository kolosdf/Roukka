from rest_framework import serializers
from .models import *
from apps.usuarios.serializers import ClienteListaSerializer

#CARRITO
class PlatilloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platillo
        fields = ['id','nombre','precio','imagen']

class ProductosSerializer(serializers.ModelSerializer):
    platillo = PlatilloSerializer(read_only=True)
    class Meta:
        model = Productos_Carrito
        fields = '__all__'

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = '__all__'

class CarritoModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos_Carrito
        fields = ['id', 'cantidad']

#AGREGAR AL CARRITO

class ProductosAgregarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos_Carrito
        fields = '__all__'

#FACTURA 1, LA DE CARRITO

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = ['id', 'cliente']

class FacturaMostrarSerializer(serializers.ModelSerializer):
    cliente = ClienteListaSerializer(read_only=True)
    class Meta:
        model = Factura
        fields = ['id', 'cliente', 'direccion', 'fecha', 'total']

class ProductosFacturaSerializer(serializers.ModelSerializer):
    platillo = PlatilloSerializer(read_only=True)
    class Meta:
        model = Productos_Factura
        exclude = ['factura']

#FACTURA 2, LA QUE HACE UN EMPLEADO
class EmpleadoFacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id','first_name','last_name','email']

class Factura2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Factura2
        fields = ['id', 'total']

class Factura2Serializer2(serializers.ModelSerializer):
    empleado = EmpleadoFacturaSerializer(read_only=True)
    class Meta:
        model = Factura2
        fields = ['id', 'empleado', 'fecha', 'total']

class ProductosFactura2Serializer(serializers.ModelSerializer):
    platillo = PlatilloSerializer(read_only=True)
    class Meta:
        model = Productos_Factura2
        exclude = ['factura']

