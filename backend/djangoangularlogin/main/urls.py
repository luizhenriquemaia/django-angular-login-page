from django.urls import include, path
from rest_framework import routers

from .views import LoginViewSet


urlpatterns = [
    path('api/auth/login/', LoginViewSet.as_view()),
]