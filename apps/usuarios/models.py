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
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['first_name', 'last_name']

    def __str__(self):
        return self.get_full_name()


roles=(('vendedor','Vendedor'),('administrador','Administrador'))

class Empleado(Usuario):
    rol = models.CharField(('Rol'), choices = roles, max_length = 50)


class Cliente(Usuario):
    numero_tarjeta = models.BigIntegerField(verbose_name='Número de tarjeta', null=True)
    cvc = models.IntegerField(verbose_name='CVV', null=True)
    fecha_vencimiento = models.CharField(max_length=10, verbose_name='Fecha de vencimiento', null=True)
    titular = models.CharField(max_length=50, verbose_name='Titular', null=True)



