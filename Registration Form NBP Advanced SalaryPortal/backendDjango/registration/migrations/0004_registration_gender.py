# Generated by Django 4.2.6 on 2023-11-07 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0003_remove_registration_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], default='O', max_length=10),
        ),
    ]
