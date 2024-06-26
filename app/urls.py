from django.urls import path
from . import views

urlpatterns = [
    path("datatables/", views.datatables, name="app-datatables"),
    path("area-chart/", views.area_chart, name="app-area_chart"),
    path("", views.index, name="index"),
]
