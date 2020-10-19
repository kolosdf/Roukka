from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    """
    Usuario para roukka y gerente de cada restaurante:
        -username
        -email
        -password
        -last_login
        -is_active
        -is_superuser
        -first_name
        -last_name
    """

roles=(('vendedor','Vendedor'),('administrador','Administrador'))

class Empleado(Usuario):
    rol = models.CharField(('Rol'), choices = roles, max_length = 50)


class Cliente(Usuario):
    numero_tarjeta = models.BigIntegerField(verbose_name='Número de tarjeta', null=True)
    cvc = models.IntegerField(verbose_name='CVV', null=True)
    fecha_vencimiento = models.CharField(max_length=10, verbose_name='Fecha de vencimiento', null=True)
    titular = models.CharField(max_length=50, verbose_name='Titular', null=True)



<<<<<<< HEAD
# Create your models here.


class Usuario(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Nombre del usuario')
    apellido = models.CharField(max_length=100, verbose_name='Apellido del usuario')
    telefono = models.CharField(max_length=10, verbose_name='Telefono del usuario')
    correo = models.EmailField(max_length=200, verbose_name='Email del usuario')
    contraseña = models.CharField(max_length=20, verbose_name='Contraseña del usuario')
=======
>>>>>>> 6b77dfe22f51930f8a0eea9a16e1a9cc2b5a1b60
