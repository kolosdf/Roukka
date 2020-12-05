from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

# USUARIO GERENTE Y ADMIN DE ROUKKA

"""
EL ADMIN CREA Y LISTA LOS OTROS ADMINS
EL ADMIN SE MODIFICA A SI MISMO NOMBRE, APELLIDO E INACTIVIDAD
SOLO HAY UN GENERENTE, PUEDE MODIFICAR SUS DATOS

"""


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'first_name', 'last_name',
                  'email', 'password', 'is_active', 'tipo')

        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        usuario = Usuario.objects.create_user(username=validated_data['email'], first_name=validated_data['first_name'], last_name=validated_data['last_name'],
                                              email=validated_data['email'], password=validated_data['password'], tipo=validated_data['tipo'], )

        return usuario


class UsuarioModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'first_name', 'last_name',
                  'email', 'is_active']


class UsuarioListarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'first_name', 'last_name',
                  'email', 'is_active']


# EMPLEADOS

"""
EL GERENTE LOS CREA,LISTA, MODIFICA E INACTIVA
EL EMPLEADO SE PUEDE MODIFICAR EL NOMBRE Y APELLIDO

"""


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'rol', 'is_active']

        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        Empleado = Empleado.objects.create_user(username=validated_data['email'], first_name=validated_data['first_name'], last_name=validated_data['last_name'],
                                                email=validated_data['email'], password=validated_data['password'], rol=validated_data['rol'])

        return Empleado


class EmpleadoModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id', 'first_name', 'last_name', 'email', 'rol', 'is_active']


class EmpleadoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id', 'first_name', 'last_name', 'email', 'rol', 'is_active']


# CLIENTES
"""
LOS EMPLEADOS PUEDEN LISTARLOS
LOS CLIENTES SE MODIFICAN A SI MISMOS

"""


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'first_name', 'last_name', 'email', 'password']


class ClienteModificarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'first_name', 'last_name', 'email', 'numero_tarjeta',
                  'cvc', 'fecha_vencimiento', 'titular', 'is_active']


class ClienteListaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'first_name', 'last_name', 'email']


# Login Serializer

class LoginSerializer(serializers.Serializer):

    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        usuario = authenticate(**data)
        if usuario and usuario.is_active:
            return usuario
        raise serializers.ValidationError("Incorrect Credentials")
