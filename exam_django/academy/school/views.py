from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import SchoolFacility, Laboratory
from .serializers import SchoolFacilitySerializer, LaboratorySerializer

class SchoolFacilityListView(APIView):
    def get(self, request):
        facilities = SchoolFacility.objects.all()
        serializer = SchoolFacilitySerializer(facilities, many=True)
        return Response(serializer.data)

class LaboratoryListView(APIView):
    def get(self, request):
        laboratories = Laboratory.objects.all()
        serializer = LaboratorySerializer(laboratories, many=True)
        return Response(serializer.data)
