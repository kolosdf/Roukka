from django.urls import path
from . import views

app_name = 'ventas'
urlpatterns = [
    path('consultarCarrito/<int:pk>/',views.consultar_carrito.as_view(), name='consultar_carrito'),
    path('agregarCarrito/',views.agregar_carrito.as_view(), name='agregar_carrito'),
    path('modificarCarrito/<int:pk>/',views.modificar_carrito.as_view(), name='modificar_carrito'),
    path('eliminarCarrito/<int:pk>/',views.eliminar_carrito.as_view(), name='eliminar_carrito'),

    path('factura2/',views.factura2.as_view(), name='factura2'),
    path('consultarHistorial2/<int:pk>/',views.consultar_factura2.as_view(), name='consultar_factura2'),
    path('consultarProducto2/<int:pk>/',views.consultar_productos2.as_view(), name='consultar_productos2'),

    path('factura/',views.factura.as_view(), name='factura'),
    path('consultarHistorial/<int:pk>/',views.consultar_factura.as_view(), name='consultar_factura'),
    path('consultarProducto/<int:pk>/',views.consultar_productos.as_view(), name='consultar_productos'),

]