# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-02-15 06:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='type',
            field=models.CharField(default='B', max_length=20),
        ),
    ]
