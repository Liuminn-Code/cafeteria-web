from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Cafe


def cafe_list(request):
    cafes = list(
        Cafe.objects.all().values(
            "id",
            "nombre",
            "origen",
            "precio",
            "stock",
            "altura",
            "variedad",
            "peso",
        )
    )

    return JsonResponse({
        "count": len(cafes),
        "results": cafes
    })