from django.urls import path
from . import views as views

urlpatterns = [
    path("", views.index, name="dashboard-index"),
    path("reports/", views.reports, name="dashboard-reports"),
]
