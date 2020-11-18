from django.conf import settings
from django.db import models


class Location(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    address = models.CharField(
        max_length=256,
    )
    city = models.CharField(
        max_length=256,
    )
    state = models.CharField(
        max_length=2,
    )
    zip = models.CharField(
        max_length=5,
    )


class Events(models.Model):
    "Generated Model"
    name = models.TextField()
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    location = models.ForeignKey(
        "eventapp.Location",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="events_location",
    )


# Create your models here.
