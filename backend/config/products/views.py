from django.http import JsonResponse
from .models import Product

def get_products(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def seed_images(request):
    images = {
        "Phone": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        "Washing Machine": "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
        "Ear Pods": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        "Tv": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        "Refrigator": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
        "Speaker": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        "Ear Rings": "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400",
        "Sunscreen": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
        "Shirt": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
        "Saree": "https://images.unsplash.com/photo-1610189019599-f1c2f1700644?w=400",
    }
    for name, url in images.items():
        Product.objects.filter(name=name).update(image=url)
    return JsonResponse({"status": "done"})