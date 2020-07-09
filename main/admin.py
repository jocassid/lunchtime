from django.contrib import admin

from main.models import \
    City, \
    Cuisine, \
    Location, \
    Restaurant, \
    State, \
    ZipCode


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'state',
    )


@admin.register(Cuisine)
class CuisineAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = (
        'restaurant',
        'street_address',
        'zip_code',
    )


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('pk', 'name')


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    list_display = (
        'abbreviation',
        'name',
    )


@admin.register(ZipCode)
class ZipCodeAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'city',
    )