from django.db import models

class Player(models.Model):
    red = models.IntegerField()
    green = models.IntegerField()
    blue = models.IntegerField()