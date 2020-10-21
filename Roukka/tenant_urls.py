from django.urls import path, include

urlpatterns = [
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
    path('productos/', include('apps.productos.urls', namespace='productos')),
]