from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from rest_framework.authtoken import views

from apps.users.api.viewsets import UserViewSet
from apps.tasks.api.viewsets import TaskViewSet

api_router = routers.DefaultRouter()
api_router.register(r'users', UserViewSet, basename='User')
api_router.register(r'tasks', TaskViewSet, basename='Task')

urlpatterns = [
    path('api/v1/', include(api_router.urls)),
    path('admin/', admin.site.urls),
    path('api-token-auth/', views.obtain_auth_token)
]
