from django.urls import path, include
from apps.empresa.views import home

from django.views.generic import TemplateView


urlpatterns = [
    path('LandingPageTenant', TemplateView.as_view(template_name='index.html')),
    path('Aboutus', TemplateView.as_view(template_name='index.html')),
    path('PlanRoukka', TemplateView.as_view(template_name='index.html')),
    path('', home, name='home'),
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
    
]