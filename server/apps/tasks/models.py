from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _


STATUS_CHOICES = (
    ("0", 'Por hacer'),
    ("1", 'Haciendo'),
    ("2", 'Hecho')
)


class Task(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    status = models.CharField(
        _('status'),
        max_length=1,
        default=STATUS_CHOICES[0][0],
        choices=STATUS_CHOICES
    )

    title = models.CharField(
        _('title'),
        max_length=80)

    description = models.CharField(
        _('description'),
        max_length=200,
        blank=True
    )

    date_created = models.DateTimeField(
        _('date created'),
        default=timezone.now)
