from django.db import models
from django.contrib.postgres.fields import ArrayField


class Timeline(models.Model):
    RECEIVED = "RE"
    TURNED_DOWN = "TU"
    IN_EVALUATION = "EV"
    REJECTED = "RE"
    IN_DEVELOPMENT = "DE"
    DISCONTINUED = "DI"
    COMPLETED = "CO"

    STATUS_CHOICES = (
        (RECEIVED, "Received"),
        (TURNED_DOWN, "Turned down"),
        (IN_EVALUATION, "In evaluation"),
        (REJECTED, "Rejected"),
        (IN_DEVELOPMENT, "In development"),
        (DISCONTINUED, "Discontinued"),
        (COMPLETED, "Completed"),
    )

    def get_default_state():
        return list(["RE"])

    state = ArrayField(
        models.CharField(
            max_length=2,
            blank=True,
            choices=STATUS_CHOICES,
        ),
        default=get_default_state,
        blank=False,
    )
