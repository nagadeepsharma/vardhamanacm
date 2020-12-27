from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('domain/',views.domain,name='domain'),
    path('blog/',views.blog,name='blog'),
    path('aboutus/',views.aboutus,name='aboutus'),
    path('events/',views.events,name='events'),
    path('ourteam/',views.ourteam,name='ourteam'),
    path('achievements/',views.achievements,name='achievements'),

    
]