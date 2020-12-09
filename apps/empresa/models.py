from django.core.exceptions import ValidationError
from django.db import models
from django_tenants.models import TenantMixin, DomainMixin
from django_tenants.postgresql_backend.base import is_valid_schema_name
from django.dispatch import receiver
from django.db.models.signals import post_save


# Create your models here.

class Funciones(models.Model):
    nombre = models.CharField(max_length=50, verbose_name='Nombre de la función')

    def __str__(self):
        return self.nombre
    """
    Se crea el plan y luego se seleccionan las funcionalidades. Se elige una que ya está o se crea una nueva

    funcion.plan.add(plan_x)

    """


class Plan(models.Model):
    nombre = models.CharField(max_length=50, verbose_name='Nombre del plan')
    precio = models.IntegerField(verbose_name='Precio')
    imagen = models.TextField(null=True)
    estado = models.BooleanField(default=True)
    funciones = models.ManyToManyField(Funciones)

    def __str__(self):
        return self.nombre

class Empresa(TenantMixin):
    """
    Modelo que representará a los tenants en el sistema
    """
    nombre = models.CharField(max_length=100, verbose_name='Nombre de la tienda')
    plan = models.ForeignKey(Plan, on_delete=models.PROTECT)
    email = models.EmailField(unique=True, verbose_name='Correo')
    numero_tarjeta = models.BigIntegerField(verbose_name='Número de tarjeta')
    cvc = models.IntegerField(verbose_name='CVC')
    fecha_vencimiento = models.CharField(max_length=10, verbose_name='Fecha de vencimiento')
    titular = models.CharField(max_length=50, verbose_name='Titular')
    imagen = models.TextField(null=True)
    estado = models.BooleanField(default=False)
    mision = models.TextField(null=True)
    vision = models.TextField(null=True)
    nosotros = models.TextField(null=True)
    longitud = models.DecimalField(null=True,decimal_places=10, max_digits=300)
    latitud = models.DecimalField(null=True,decimal_places=10, max_digits=300)


    def __str__(self):
        return self.nombre


class Dominio(DomainMixin):
    """
    Modelo que representará al dominio en el sistema
    """
   
    
class Informacion(models.Model):
    empresa = models.OneToOneField(Empresa, on_delete=models.CASCADE)
    mision = models.TextField(null=True)
    vision = models.TextField(null=True)
    nosotros = models.TextField(null=True)
    longitud = models.DecimalField(null=True,decimal_places=10, max_digits=300)
    latitud = models.DecimalField(null=True,decimal_places=10, max_digits=300)

@receiver(post_save, sender=Empresa)
def crear_info(sender, instance, created, **kwargs):
    if created:
        i = Informacion.objects.create(empresa=instance)
        i.save()

#peticion,queja, reclamo, denuncia, solicitud
tipo=(('peticion','Petición'),('queja','Queja'),('reclamo','Reclamo'),('denuncia','Denuncia'),('solicitud','Solicitud'))
class pqrsd(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField()
    comentario = models.TextField()
    tipo = models.CharField(('Tipo'), choices = tipo, max_length = 50)

