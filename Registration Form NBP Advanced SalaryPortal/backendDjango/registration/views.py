

"""

This module defines the views for the Kamyab Jawab program.
It includes the RegistrationList view for listing and creating registration entries.

"""



from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Registration
from .serializers import RegistrationSerializer

class RegistrationList(generics.ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer