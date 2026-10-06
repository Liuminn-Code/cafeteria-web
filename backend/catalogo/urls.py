from rest_framework.routers import DefaultRouter
from .views import CafeViewSet

router = DefaultRouter()
router.register("cafes", CafeViewSet, basename="cafe")

urlpatterns = router.urls