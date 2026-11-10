
from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny

from .models import Cafe
from .serializers import CafeSerializer, RegistroSerializer


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer


class RegistroView(generics.CreateAPIView):
    serializer_class = RegistroSerializer
    permission_classes = [AllowAny]
