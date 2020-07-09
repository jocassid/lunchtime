
from django.contrib.auth.models import User
from django.db import models


class Restaurant(models.Model):

    name = models.CharField(
        max_length=200,
        unique=True
    )

    cuisines = models.ManyToManyField(
        'Cuisine',
        related_name='restaurants',
    )

    def __str__(self):
        return self.name


class Cuisine(models.Model):

    name = models.CharField(
        max_length=200,
        unique=True,
    )

    def __str__(self):
        return self.name


class Location(models.Model):

    restaurant = models.ForeignKey(
        Restaurant,
        related_name='locations',
        on_delete=models.CASCADE,
    )

    street_address = models.CharField(
        max_length=200,
    )

    zip_code = models.ForeignKey(
        'ZipCode',
        related_name='locations',
        on_delete=models.CASCADE,
    )


class ZipCode(models.Model):

    code = models.CharField(
        max_length=10,
    )

    city = models.ForeignKey(
        'City',
        related_name='zip_codes',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.code


class City(models.Model):

    class Meta:
        verbose_name_plural = 'Cities'

    name = models.CharField(
        max_length=100,
    )

    state = models.ForeignKey(
        'State',
        related_name='cities',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.name}, {self.state}"


class State(models.Model):

    abbreviation = models.CharField(
        max_length=2,
    )

    name = models.CharField(
        max_length=25,
    )

    def __str__(self):
        return self.abbreviation


class Profile(models.Model):

    user = models.OneToOneField(
        User,
        related_name='profile',
        on_delete=models.CASCADE,
    )


class RestaurantHistory(models.Model):

    profile = models.ForeignKey(
        Profile,
        related_name='restaurant_history',
        on_delete=models.CASCADE,
    )

    restaurant = models.ForeignKey(
        Restaurant,
        related_name='restaurant_history',
        on_delete=models.CASCADE,
    )

    visit_date = models.DateTimeField()

