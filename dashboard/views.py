from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "dashboard.html")


def report(request):
    return render(request, "reports.html")
