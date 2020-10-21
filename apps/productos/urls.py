from django.urls import path
from . import views

app_name = 'productos'
urlpatterns = [
    path('crearIngrediente/',views.crear_ingrediente.as_view(), name='crear_ingrediente'),
    path('modificarIngrediente/',views.modificar_ingrediente.as_view(), name='modificar_ingrediente'),
    path('listarIngrediente/',views.listar_ingrediente.as_view(), name='listar_ingrediente'),
    path('crearPlatillo/',views.crear_platillo.as_view(), name='crear_platillo'),
    path('modificarPlatillo/',views.modificar_platillo.as_view(), name='modificar_platillo'),
    path('listarPlatillo/',views.listar_platillo.as_view(), name='listar_platillo'),
    path('crearMenu/',views.crear_menu.as_view(), name='crear_menu'),
    path('modificarMenu/',views.modificar_menu.as_view(), name='modificar_menu'),
    path('listarMenu/',views.listar_menu.as_view(), name='listar_menu'),   
]