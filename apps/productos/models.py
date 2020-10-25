from django.db import models

# Create your models here.


class Ingrediente(models.Model):
    nombre = models.TextField(max_length=50)

    def __str__(self):
        return self.nombre

class Platillo(models.Model):
    nombre = models.TextField(max_length=50)
    precio = models.BigIntegerField()
    unidades = models.IntegerField()
    ingredientes = models.ManyToManyField(Ingrediente)
    imagen = models.TextField()

    def __str__(self):
        return self.nombre

class Menu(models.Model):
    nombre = models.TextField(max_length=50)
    platillos = models.ManyToManyField(Platillo)
    imagen = models.TextField()

    def __str__(self):
        return self.nombre
