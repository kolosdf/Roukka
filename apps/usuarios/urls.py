from django.urls import path
from . import views

app_name = 'usuarios'
urlpatterns = [

    #URLS de usuarios
    path('crear/',views.crear_usuario.as_view(), name='crear_usuario'),
    path('',views.listar_usuario.as_view(), name='listar_usuario'),
    path('modificar/<int:pk>/', views.modificar_usuario.as_view(), name='modificar_usuario'),
    
]
