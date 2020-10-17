from django.db import models

# Create your models here.


class Usuario(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Nombre del usuario')
    apellido = models.CharField(max_length=100, verbose_name='Apellido del usuario')
    telefono = models.CharField(max_length=10, verbose_name='Telefono del usuario')
    correo = models.EmailField(max_length=200, verbose_name='Email del usuario')
    contraseña = models.CharField(max_length=20, verbose_name='Contraseña del usuario')
