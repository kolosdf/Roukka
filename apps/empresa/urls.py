from django.urls import path
from . import views

app_name = 'empresas'
urlpatterns = [
    path('crear/',views.crear_empresa, name='crear_empresa'),
    path('listar/',views.listar_empresa, name='listar_empresa'),
    #path('modificar/<int:id>/', views.modificar_empresa, name='modificar_empresa'),
    path('crearPlan/',views.crear_plan, name='crear_plan'),
    path('crearFuncion/',views.crear_funcion, name='crear_funcion'),
]
