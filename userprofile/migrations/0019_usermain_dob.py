# Generated by Django 3.1.3 on 2020-12-08 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0018_auto_20201208_1402'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermain',
            name='dob',
            field=models.CharField(blank=True, max_length=100, verbose_name='Дата рождения'),
        ),
    ]
