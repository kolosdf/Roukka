from django.db import models
from apps.usuarios.models import Cliente, Empleado
from apps.productos.models import Platillo
from django.dispatch import receiver
from django.db.models.signals import post_save

class Carrito(models.Model):
    cliente = models.OneToOneField(Cliente, on_delete=models.CASCADE)
    total = models.BigIntegerField()
    

class Productos_Carrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    platillo = models.ForeignKey(Platillo, on_delete=models.CASCADE)
    cantidad = models.BigIntegerField()

class Factura(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=50)
    fecha = models.DateField(auto_now=True)
    total = models.BigIntegerField()

class Productos_Factura(models.Model):
    factura = models.ForeignKey(Factura, on_delete=models.CASCADE)
    platillo = models.ForeignKey(Platillo, on_delete=models.CASCADE)
    cantidad = models.BigIntegerField()

class Factura2(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    total = models.BigIntegerField()
    fecha = models.DateField(auto_now=True)

class Productos_Factura2(models.Model):
    factura = models.ForeignKey(Factura2, on_delete=models.CASCADE)
    platillo = models.ForeignKey(Platillo, on_delete=models.CASCADE)
    cantidad = models.BigIntegerField()




@receiver(post_save, sender=Cliente)
def crear_carrito(sender, instance, created, **kwargs):
    if created:
        Carrito.objects.create(cliente=instance, total=0)

@receiver(post_save, sender=Cliente)
def guarda_carrito(sender, instance, **kwargs):
    instance.carrito.save()
