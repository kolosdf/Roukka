from django.urls import path
from . import views

app_name = 'empresas'
urlpatterns = [
    #URLS de empresas
    path('',views.listar_empresa.as_view(), name='listar_empresa'),
    path('crear/',views.crear_empresa.as_view(), name='crear_empresa'),
    
    path('modificar/<int:pk>/', views.modificar_empresa.as_view(), name='modificar_empresa'),
    #URLS de planes
    path('crearPlan/',views.crear_plan.as_view(), name='crear_plan'),
    path('listarPlan/',views.listar_plan.as_view(), name='listar_plan'),
    path('modificarPlan/<int:pk>/',views.modificar_plan.as_view(), name='modificar_plan'),
    #URLS de funciones
    path('crearFuncion/',views.crear_funcion.as_view(), name='crear_funcion'),
    path('listarFuncion/',views.listar_funcion.as_view(), name='listar_funcion'),
    path('modificarFuncion/<int:pk>/',views.modificar_funcion.as_view(), name='modificar_funcion'),

    path('modificarInformacion/<int:pk>/',views.modificar_informacion.as_view(), name='modificar_informacion'),


]
