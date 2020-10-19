from rest_framework import serializers
from .models import *

<<<<<<< HEAD
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
=======
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
        fields = ['first_name','last_name','numero_tarjeta', 'cvc', 'fecha_vencimiento', 'titular']

class ClienteListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id','first_name','last_name', 'email','numero_tarjeta', 'cvc', 'fecha_vencimiento', 'titular']



>>>>>>> 6b77dfe22f51930f8a0eea9a16e1a9cc2b5a1b60
