from django.urls import path
from . import views

urlpatterns = [
    path("cafes/", views.cafe_list, name="cafe-list"),
]