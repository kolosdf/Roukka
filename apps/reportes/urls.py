from django.urls import path
from . import views

app_name = 'reportes'
urlpatterns = [
    path('ventasTotales/',views.ventas_totales.as_view(), name='ventas_totales'),
    path('platilloMasVendido/',views.mas_vendido.as_view(), name='mas_vendido'),
    path('ventasPlatillo/',views.ventas_totales_platillo.as_view(), name='ventas_totales_platillo'),
    path('ventasMesPlatillo/<int:pk>/',views.ventas_mes_platillo.as_view(), name='ventas_mes_platillo'),
    path('ventasClientes/',views.mas_ventas_clientes.as_view(), name='mas_ventas_clientes'),
    path('ventasEmpleados/',views.mas_ventas_empleados.as_view(), name='mas_ventas_empleados'),
    path('bajaExistencia/',views.bajas_existencias.as_view(), name='bajas_existencias'),
  
]