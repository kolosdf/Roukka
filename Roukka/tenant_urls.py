from django.urls import path, include

from django.views.generic import TemplateView

from apps.empresa.views import home


urlpatterns = [
    path('LandingPage', TemplateView.as_view(template_name='index.html')),
    path('Aboutus', TemplateView.as_view(template_name='index.html')),
    path('PlanRoukka', TemplateView.as_view(template_name='index.html')),
    path('usuarios/', include('apps.usuarios.urls', namespace='usuarios')),
    path('productos/', include('apps.productos.urls', namespace='productos')),
    path('ventas/', include('apps.ventas.urls', namespace='ventas')),

]