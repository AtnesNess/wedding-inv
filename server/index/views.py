from django.views.generic import TemplateView
from django.http import HttpResponse

from index.models import Guest

import json


class IndexView(TemplateView):
    template_name = 'index.html'


def guest(response):
    if response.method == 'POST':
        body = json.loads(response.body)

        name = body.get('user', '')
        accepted = body.get('accept', False)

        try:
            count = int(body.get('count', '1'))
        except Exception:
            count = 1

        guest, created = Guest.objects.get_or_create(name=name)
        guest.count = count
        guest.attendance = accepted
        guest.save()

    return HttpResponse('OK')
