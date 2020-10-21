from rest_framework import serializers
from .models import *

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'

class EmpresaModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['nombre','email','imagen']


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

class FuncionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funciones
        fields = '__all__'