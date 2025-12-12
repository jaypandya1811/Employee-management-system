from django.urls import path
from . import views

urlpatterns = [
    path('employeelist/',views.getemployeelist.as_view()),
    path('getemployee/<int:id>',views.employee_detail.as_view()),
]