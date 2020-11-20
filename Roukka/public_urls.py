from django.urls import path, include

from apps.empresa.views import home
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('Contactus', TemplateView.as_view(template_name='index.html')),
    path('PlanRoukka', TemplateView.as_view(template_name='index.html')),
    path('empresas/', include('apps.empresa.urls', namespace='empresas')),
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
    
]