from django.urls import path
from . import views

urlpatterns = [
    path(
        "timelines/<int:pk>",
        views.TimelineViewSet.as_view(
            {
                "get": "retrieve",
                "patch": "partial_update",
            }
        ),
        name="timelines_pk",
    ),
]