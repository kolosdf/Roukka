from django.urls import path
from . import views

app_name = 'usuarios'
urlpatterns = [
<<<<<<< HEAD

    #URLS de usuarios
    path('crear/',views.crear_usuario.as_view(), name='crear_usuario'),
    path('',views.listar_usuario.as_view(), name='listar_usuario'),
    path('modificar/<int:pk>/', views.modificar_usuario.as_view(), name='modificar_usuario'),
=======
    #URLS de usuario gerente y admin de roukka
    path('crearSuper/',views.crear_usuario.as_view(), name='crear_usuario'),
    #URLS de empleados
    path('crearEmpleado/',views.crear_empleado.as_view(), name='crear_empleado'),
    path('listarEmpleado/',views.listar_empleado.as_view(), name='listar_empleado'),
    path('modificarEmpleado/<int:pk>/',views.modificar_empleado.as_view(), name='modificar_empleado'),
    #URLS de clientes
    path('crearCliente/',views.crear_cliente.as_view(), name='crear_cliente'),
    path('listarCliente/',views.listar_cliente.as_view(), name='listar_cliente'),
    path('modificarCliente/<int:pk>/',views.modificar_cliente.as_view(), name='modificar_cliente'),
>>>>>>> 6b77dfe22f51930f8a0eea9a16e1a9cc2b5a1b60
    
]
