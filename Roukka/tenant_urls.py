from django.urls import path, include
from apps.empresa.views import home

urlpatterns = [
    path('', home, name='home'),
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
]