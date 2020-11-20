from rest_framework import serializers
from .models import *

#INGREDIENTES
class IngredienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingrediente
        fields = '__all__'

#PLATILLOS
class PlatilloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platillo
        fields = '__all__'

#MENUS
class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

