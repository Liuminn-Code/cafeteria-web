
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Cafe

User = get_user_model()


class RegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class CafeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cafe
        fields = [
            "id",
            "nombre",
            "origen",
            "precio",
            "stock",
            "altura",
            "variedad",
            "peso"
        ]
        read_only_fields = ["id"]

    def validate_precio(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "El precio debe ser mayor que 0."
            )
        return value
