from rest_framework import serializers
from .models import *

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

class ProductosAgregarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos_Carrito
        fields = '__all__'

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = ['id', 'cliente', 'direccion']

class Factura2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Factura2
        fields = ['id', 'empleado']

class ProductosFactura2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Productos_Factura2
        fields = '__all__'