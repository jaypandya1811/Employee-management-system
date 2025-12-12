from django.db import models

class employees(models.Model):
    name = models.CharField(max_length=30)
    designation = models.CharField(max_length=40)
    joining_date = models.CharField(max_length=50)

    def __str__(self):
        return self.name