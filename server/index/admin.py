from django.contrib import admin

from index.models import Guest


class GuestAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'count', 'attendance')


admin.site.register(Guest, GuestAdmin)
