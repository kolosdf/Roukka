from django.urls import path, include

from apps.empresa.views import home

urlpatterns = [
    path('', home, name='home'),
    path('empresas/', include('apps.empresa.urls', namespace='empresas')),
]