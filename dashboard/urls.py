from django.urls import path
from . import views as view

urlpatterns = [
    path("", view.index, name="dashboard-index"),
    path("reports", view.report, name="dashboard-reports"),
]
