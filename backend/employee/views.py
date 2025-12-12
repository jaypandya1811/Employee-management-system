from django.shortcuts import render
from .models import employees
from .serializers import employeeserializer
from rest_framework import generics

class getemployeelist(generics.ListCreateAPIView):
    queryset = employees.objects.all()
    serializer_class = employeeserializer
    
class employee_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = employees.objects.all()
    serializer_class = employeeserializer
    lookup_field = "id"