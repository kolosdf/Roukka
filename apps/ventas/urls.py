from django.urls import path
from . import views

app_name = 'ventas'
urlpatterns = [
    path('consultarCarrito/<int:pk>/',views.consultar_carrito.as_view(), name='consultar_carrito'),
    path('agregarCarrito/',views.agregar_carrito.as_view(), name='agregar_carrito'),

]