from django.urls import path, include

from django.views.generic import TemplateView

from apps.empresa.views import home


urlpatterns = [
    path('LandingPageTenant', TemplateView.as_view(template_name='index.html')),
    path('Aboutus', TemplateView.as_view(template_name='index.html')),
    path('PlanRoukka', TemplateView.as_view(template_name='index.html')),
    path('', home, name='home'),
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
    path('productos/', include('apps.productos.urls', namespace='productos')),
]