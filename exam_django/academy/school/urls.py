from django.urls import path
from .views import SchoolFacilityListView, LaboratoryListView

urlpatterns = [
    path('facilities/', SchoolFacilityListView.as_view(), name='school-facilities'),
    path('laboratories/', LaboratoryListView.as_view(), name='laboratories'),
]