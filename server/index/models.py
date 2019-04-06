from django.db import models


class Guest(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    attendance = models.BooleanField(null=True, blank=True)
    count = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return '{} {}'.format(self.name, self.count)
