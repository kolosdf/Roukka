from rest_framework import serializers
from .models import *

#USUARIO GERENTE Y ADMIN DE ROUKKA
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['first_name','last_name','email','password']

#EMPLEADOS

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['first_name','last_name','email','password','rol']

class EmpleadoModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['first_name','last_name','rol']

class EmpleadoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id','first_name','last_name','email','rol', 'is_active']

class EmpleadoDesactivarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['is_active']


#CLIENTES

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['first_name','last_name','email','password']

class ClienteModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['first_name','last_name','numero_tarjeta', 'cvv', 'fecha_vencimiento', 'titular']

class ClienteListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','first_name','last_name', 'email','numero_tarjeta', 'cvv', 'fecha_vencimiento', 'titular']



