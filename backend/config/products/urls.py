from django.urls import path
from .views import get_products, seed_images

urlpatterns = [
    path('products/', get_products),
    path('seed/', seed_images),
]