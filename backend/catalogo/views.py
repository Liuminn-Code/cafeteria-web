from rest_framework import viewsets
from .models import Cafe
from .serializers import CafeSerializer

class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer