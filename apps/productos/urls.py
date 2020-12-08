from django.urls import path
from . import views

app_name = 'productos'
urlpatterns = [
    #URLS DE INGREDIENTES
    path('crearIngrediente/',views.crear_ingrediente.as_view(), name='crear_ingrediente'),
    path('modificarIngrediente/<int:pk>/',views.modificar_ingrediente.as_view(), name='modificar_ingrediente'),
    path('listarIngrediente/',views.listar_ingrediente.as_view(), name='listar_ingrediente'),
    #URLS DE PLATILLOS
    path('crearPlatillo/',views.crear_platillo.as_view(), name='crear_platillo'),
    path('modificarPlatillo/<int:pk>/',views.modificar_platillo.as_view(), name='modificar_platillo'),
    path('listarPlatillo/',views.listar_platillo.as_view(), name='listar_platillo'),
    path('detallePlatillo/<int:pk>/',views.detalle_platillo.as_view(), name='detalle_platillo'),
    #URLS DE MENUS
    path('crearMenu/',views.crear_menu.as_view(), name='crear_menu'),
    path('modificarMenu/<int:pk>/',views.modificar_menu.as_view(), name='modificar_menu'),
    path('listarMenu/',views.listar_menu.as_view(), name='listar_menu'),   
    path('detalleMenu/<int:pk>/',views.detalle_menu.as_view(), name='detalle_menu'),

    #Excel
    path('exportarMenu/',views.exportar_menu.as_view(), name='exportar_menu'),   
    path('importarMenu/',views.importar_menu.as_view(), name='importar_menu'),

]