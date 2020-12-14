from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Timeline
from .serializers import TimelineSerializer


class TimelineViewSet(viewsets.ModelViewSet):
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer

    def retrieve(self, request, pk=None):
        obj, created = Timeline.objects.get_or_create(pk=pk)
        data = TimelineSerializer(obj).data

        if created:
            return Response(
                data,
                status=status.HTTP_201_CREATED,
            )

        return Response(data, status=status.HTTP_200_OK)
