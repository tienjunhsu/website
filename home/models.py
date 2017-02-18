#encoding:utf-8
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class News(models.Model):
    #活动，动态
    date = models.DateField()
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=2000)


class User(models.Model):
    username = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=50)
    quality = models.BooleanField(default=False) #是否验证过了
    type = models.CharField(max_length=20,default='B') #投资类型

    def __unicode__(self):
        return self.username

