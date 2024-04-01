from django.shortcuts import render
from django.http import JsonResponse
from random import randint


# Create your views here.
def total_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 10000) for _ in range(7)],
        }
    )


def sub_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 90000) for _ in range(7)],
        }
    )


def revenue_views(request):
    return JsonResponse(
        {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "data": [randint(1, 60000) for _ in range(7)],
        }
    )
