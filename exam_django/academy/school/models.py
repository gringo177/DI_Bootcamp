from django.db import models

class SchoolFacility(models.Model):
    facility_name = models.CharField(max_length=100)
    usage_purpose = models.TextField()

    def __str__(self):
        return self.facility_name

class Laboratory(SchoolFacility):
    equipment_list = models.TextField()