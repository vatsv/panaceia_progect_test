# Generated by Django 3.1.3 on 2020-12-14 13:30

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('userprofile', '0030_auto_20201214_1629'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MembershipAssociations',
            new_name='Associations',
        ),
    ]