

"""
This module defines the Registration model for the Kamyab Jawab program.
It includes fields for the participant's full name, CNIC, gender, and
account number.

"""



# registration/models.py
from django.db import models

class Registration(models.Model):
    fullName = models.CharField(max_length=100)
    cnic = models.CharField(max_length=15, unique=True)  # Assuming CNIC is a unique identifier
    GENDER_CHOICES = (
        ('Male','Male'),
        ('Female','Female'),
        ('Other','Other')
    )
    gender = models.CharField(max_length=10,choices=GENDER_CHOICES, default='NaN')
    accountNo = models.CharField(max_length=20)





    # def __str__(self):
    #     return self.fullName
