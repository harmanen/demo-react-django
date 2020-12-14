from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.reverse import reverse
from rest_framework import status

from .models import Timeline


class TimelineTestCase(TestCase):
    def setUp(self):
        self.timeline = Timeline.objects.create()
        self.pk = self.timeline.pk

        self.client = APIClient()

    def test_timeline_is_found(self):
        response = self.client.get(
            reverse(
                "timelines_pk", args=(self.timeline.pk,)
            )
        )

        self.assertEqual(
            response.status_code, status.HTTP_200_OK
        )

        self.assertEqual(
            response.data["state"], [Timeline.RECEIVED]
        )

    def test_patch_timeline(self):
        response = self.client.patch(
            reverse(
                "timelines_pk", args=(self.timeline.pk,)
            ),
            format="json",
            data={"state": [Timeline.COMPLETED]},
        )

        self.assertEqual(
            response.status_code, status.HTTP_200_OK
        )

        self.assertEqual(
            response.data["state"],
            [Timeline.COMPLETED],
        )

        self.assertEqual(
            Timeline.objects.get(pk=self.timeline.pk).state,
            [Timeline.COMPLETED],
        )

    def test_patch_with_invalid_status_choice(self):
        response = self.client.patch(
            reverse(
                "timelines_pk", args=(self.timeline.pk,)
            ),
            format="json",
            data={"state": ["invalid"]},
        )

        self.assertEqual(
            response.status_code,
            status.HTTP_400_BAD_REQUEST,
        )

        self.assertEqual(
            response.data["state"][0][0].code,
            "invalid_choice",
        )

    def test_timeline_is_created_if_not_found(self):
        response = self.client.get(
            reverse(
                "timelines_pk", args=(self.timeline.pk + 1,)
            )
        )

        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )

        self.assertEqual(
            response.data["state"], [Timeline.RECEIVED]
        )

    def test_timeline_is_created_with_default_status(self):
        response = self.client.get(
            reverse(
                "timelines_pk", args=(self.timeline.pk + 1,)
            ),
            format="json",
            data={"state": [Timeline.COMPLETED]},
        )

        self.assertEqual(
            response.status_code, status.HTTP_201_CREATED
        )

        self.assertEqual(
            response.data["state"], [Timeline.RECEIVED]
        )
