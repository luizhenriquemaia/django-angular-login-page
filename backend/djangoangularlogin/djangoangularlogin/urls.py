from django.contrib import admin
from django.views.generic.base import TemplateView
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="home.html"), name="home"),
    path('', include('main.urls')),
]
