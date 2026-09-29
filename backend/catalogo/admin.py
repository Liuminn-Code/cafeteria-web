from django.contrib import admin
from .models import Cafe

@admin.register(Cafe)
class CafeAdmin(admin.ModelAdmin):
    list_display = ("nombre", "origen", "precio", "stock", "altura", "variedad", "peso")
    list_filter = ("origen", "variedad")
    search_fields = ("nombre", "origen", "variedad")