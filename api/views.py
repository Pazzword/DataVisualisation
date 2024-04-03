from django.shortcuts import render
from django.http import JsonResponse
from random import randint
from api.models import TotalViewsModel


# Create your views here.
def total_views(request):
    queryset = TotalViewsModel.objects.all()
    dict = {
        "labels": [],
        "data": [],
    }
    for item in queryset:
        dict["labels"].append(item.labels)
        dict["data"].append(item.data)
    return JsonResponse(dict)


# Datatables
def datatable_api(request):
    return JsonResponse({})


#
def sub_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 90000) for _ in range(7)],
        }
    )


#
def revenue_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 60000) for _ in range(7)],
        }
    )
