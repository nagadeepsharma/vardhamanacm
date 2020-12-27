from django.db import models

# Create your models here.

class Upcomming(models.Model):
    title=models.CharField(max_length=20)
    date=models.DateTimeField(auto_now_add=False,null=True,blank=True)
    desc=models.TextField(blank=True)
    link=models.CharField(max_length=150,blank=True)
    def __str__(self):
        return self.title
class Past(models.Model):
    date=models.DateTimeField(auto_now_add=False,null=True,blank=True)
    event=models.CharField(max_length=100)
    attendees=models.IntegerField()
    details=models.TextField(blank=True)
    speaker=models.CharField(max_length=30)

    def __str__(self):
        return self.event
class Pastachievements(models.Model):
    eventname=models.CharField(max_length=100)
    eventdate=models.DateTimeField(auto_now_add=False,null=True,blank=True)
    eventparticipants=models.IntegerField()
    eventwinners=models.TextField(blank=True)

    def __str__(self):
        return self.eventname
class Projects(models.Model):
    title=models.CharField(max_length=20)
    link=models.CharField(max_length=150,blank=True)
    def __str__(self):
        return self.title
