from django.urls import path
from . import views

app_name = 'empresas'
urlpatterns = [
    path('crear/',views.crear_empresa.as_view(), name='crear_empresa'),
    path('',views.listar_empresa.as_view(), name='listar_empresa'),
    path('modificar/<int:pk>/', views.modificar_empresa.as_view(), name='modificar_empresa'),
    path('crearPlan/',views.crear_plan.as_view(), name='crear_plan'),
    path('crearFuncion/',views.crear_funcion.as_view(), name='crear_funcion'),
]
