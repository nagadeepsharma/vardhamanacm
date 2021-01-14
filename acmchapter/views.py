from django.shortcuts import render
from .models import Upcomming,Past,Pastachievements,Projects,Gallery

# Create your views here.

def index(request):
    return render(request,'index.html')
def domain(request):
    return render(request,'domain.html')
def blog(request):
    return render(request,'blog.html')
def aboutus(request):
    return render(request,'aboutus.html')
def events(request):
    uevents=Upcomming.objects.all()
    pevents=Past.objects.all()
    return render(request,'events.html',{'uevents':uevents,'pevents':pevents})
def ourteam(request):
    return render(request,'ourteam.html')

def achievements(request):
    aevents=Pastachievements.objects.all()
    aprojects=Projects.objects.all()
    return render(request,'achievements.html',{'aevents':aevents,'aprojects':aprojects})
def gallery(request):
    gallery=Gallery.objects.all()
    return render(request,'gallery.html',{'gallery':gallery})


