
from django.db import models

CATEGORY_CHOICES = [
    ('Electronics', 'Electronics'),
    ('Jewelleries', 'Jewelleries'),
    ('Cosmetics', 'Cosmetics'),
    ('Gents', 'Gents'),
    ('Ladies', 'Ladies'),
]

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Electronics')
