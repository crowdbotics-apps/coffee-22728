from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import EventsViewSet, LocationViewSet

router = DefaultRouter()
router.register("location", LocationViewSet)
router.register("events", EventsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
