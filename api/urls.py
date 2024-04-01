from django.urls import path
from . import views

urlpatterns = [
    path("total-views", views.total_views, name="api-total-views"),
    path("sub-views", views.sub_views, name="api-sub-views"),
    path("revenue-views", views.revenue_views, name="api-revenue-views"),
]
