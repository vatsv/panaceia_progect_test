# Generated by Django 3.1.3 on 2020-12-14 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0031_auto_20201214_1630'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermain',
            name='phone',
            field=models.CharField(blank=True, max_length=100, verbose_name='Номер телефона'),
        ),
    ]