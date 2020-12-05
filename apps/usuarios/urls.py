from django.urls import path
from . import views
from knox import views as knox_views

app_name = 'usuarios'
urlpatterns = [
    # URLS de usuario gerente y admin de roukka
    path('crearSuper/', views.crear_usuario.as_view(), name='crear_usuario'),
    path('listarSuper/', views.listar_usuario.as_view(), name='listar_usuario'),
    path('modificarSuper/<int:pk>/',
         views.modificar_usuario.as_view(), name='modificar_usuario'),
    # URLS de empleados
    path('crearEmpleado/', views.crear_empleado.as_view(), name='crear_empleado'),
    path('listarEmpleado/', views.listar_empleado.as_view(), name='listar_empleado'),
    path('modificarEmpleado/<int:pk>/',
         views.modificar_empleado.as_view(), name='modificar_empleado'),
    # URLS de clientes
    path('crearCliente/', views.crear_cliente.as_view(), name='crear_cliente'),
    path('listarCliente/', views.listar_cliente.as_view(), name='listar_cliente'),
    path('modificarCliente/<int:pk>/',views.modificar_cliente.as_view(), name='modificar_cliente'),
    path('ubicacionCliente/<int:pk>/',views.ubicacion_cliente.as_view(), name='ubicacion_cliente'),
    path('tarjetaCliente/<int:pk>/',views.tarjeta_cliente.as_view(), name='tarjeta_cliente'),
    path('exportarCliente/', views.exportar_cliente.as_view(), name='exportar_cliente'),


    #Login
    path('login/', views.LoginAPI.as_view()),
    path('user/', views.UserAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout)')

]
