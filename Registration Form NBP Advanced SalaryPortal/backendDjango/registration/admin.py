
"""
This module registers the Registration model with the Django admin site.
It includes a customized admin interface to display the full name, 
CNIC, gender, and account number of participants.

"""



from django.contrib import admin
from .models import Registration
# Register your models here.

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('fullName', 'cnic','gender','accountNo')  # Define the fields you want to display

admin.site.register(Registration, RegistrationAdmin)
