#! /user/bin/env python
#encoding:utf-8
from django.conf.urls import url

from home import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/$', views.about, name='about'),
    url(r'^news/$', views.news, name='news'),
    url(r'^news/(\d+)/$', views.news_item, name='news_item'),
    url(r'^cases/(\d+)/$', views.case, name='case'),
    url(r'^profile/$', views.profile, name='profile'),
    url(r'^services/$', views.services, name='services'),
    url(r'^messages/$', views.messages, name='messages'),
    url(r'^product/$', views.product, name='product'),
    url(r'^login/$', views.login, name='login'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^quality/$', views.quality, name='quality'),
]