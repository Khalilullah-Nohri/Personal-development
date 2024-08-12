from django.urls import path
from .views import RegistrationList

urlpatterns = [
    path('registrations/', RegistrationList.as_view(), name='registration-list'),
]