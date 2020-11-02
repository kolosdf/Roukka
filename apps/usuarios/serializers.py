from rest_framework import serializers
from .models import *

#USUARIO GERENTE Y ADMIN DE ROUKKA

"""
EL ADMIN CREA Y LISTA LOS OTROS ADMINS
EL ADMIN SE MODIFICA A SI MISMO NOMBRE, APELLIDO E INACTIVIDAD
SOLO HAY UN GENERENTE, PUEDE MODIFICAR SUS DATOS

"""
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id','first_name','last_name','email','password']

class UsuarioModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id','first_name','last_name','is_active']

class UsuarioListarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id','first_name','last_name','email','is_active']


#EMPLEADOS

"""
EL GERENTE LOS CREA,LISTA, MODIFICA E INACTIVA
EL EMPLEADO SE PUEDE MODIFICAR EL NOMBRE Y APELLIDO

"""

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id','first_name','last_name','email','password','rol']

class EmpleadoModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id','first_name','last_name','rol','is_active']

class EmpleadoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id','first_name','last_name','email','rol','is_active']



#CLIENTES
"""
LOS EMPLEADOS PUEDEN LISTARLOS
LOS CLIENTES SE MODIFICAN A SI MISMOS

"""

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','first_name','last_name','email','password']

class ClienteModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','first_name','last_name','numero_tarjeta', 'cvc', 'fecha_vencimiento', 'titular','is_active']

class ClienteListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','first_name','last_name', 'email']



