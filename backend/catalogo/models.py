from django.db import models

# Create your models here.

class Cafe(models.Model):
    nombre = models.CharField(max_length=100)
    origen = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    altura = models.IntegerField()
    variedad = models.CharField(max_length=100)
    peso = models.IntegerField(default=250)

    class Meta:
        ordering = ["nombre"]
    
    def __str__(self):
        return self.nombre