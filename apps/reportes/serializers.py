from rest_framework import serializers
from apps.ventas.models import *

class VentasTotales(serializers.ModelSerializer):
    mes = serializers.CharField()
    total = serializers.IntegerField()

class BajaExistencia(serializers.ModelSerializer):
    class Meta:
        model = Platillo
        fields = ['id', 'nombre', 'imagen', 'unidades']
    