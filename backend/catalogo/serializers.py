from rest_framework import serializers
from .models import Cafe

class CafeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cafe
        fields = ["id", "nombre", "origen", "precio", "stock", "altura", "variedad", "peso"]
        read_only_fields = ["id"]

    def validate_precio(self, value):
        if value <= 0:
            raise serializers.ValidationError("El precio debe ser mayor que 0.")
        return value