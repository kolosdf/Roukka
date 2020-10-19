from django.core.exceptions import ValidationError
from django.db import models
from django_tenants.models import TenantMixin, DomainMixin
from django_tenants.postgresql_backend.base import is_valid_schema_name


# Create your models here.

class Plan(models.Model):
    nombre = models.CharField(max_length=50, verbose_name='Nombre del plan')
    precio = models.IntegerField(verbose_name='Precio')

class Empresa(TenantMixin):
    """
    Modelo que representará a los tenants en el sistema
    """
    nombre = models.CharField(max_length=100, verbose_name='Nombre de la tienda')
    plan = models.ForeignKey(Plan, on_delete=models.PROTECT)
    email = models.EmailField(unique=True, verbose_name='Correo', null=True)
    numero_tarjeta = models.BigIntegerField(verbose_name='Número de tarjeta', null=True)
    cvc = models.IntegerField(verbose_name='CVV', null=True)
    fecha_vencimiento = models.CharField(max_length=10, verbose_name='Fecha de vencimiento', null=True)
    titular = models.CharField(max_length=50, verbose_name='Titular', null=True)


    def __str__(self):
        return self.nombre


class Dominio(DomainMixin):
    """
    Modelo que representará al dominio en el sistema
    """
   


class Funciones(models.Model):
    nombre = models.CharField(max_length=50, verbose_name='Nombre de la función')
    plan = models.ManyToManyField(Plan, related_name='funciones')

    """
    Se crea el plan y luego se seleccionan las funcionalidades. Se elige una que ya está o se crea una nueva

    funcion.plan.add(plan_x)

    """
    
    