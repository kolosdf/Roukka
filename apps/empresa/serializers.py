from rest_framework import serializers
from .models import *

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        exclude = ['estado']

class EmpresaModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        exclude = ['schema_name']

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

class FuncionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funciones
        fields = '__all__'

class InformacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Informacion
        fields = '__all__'