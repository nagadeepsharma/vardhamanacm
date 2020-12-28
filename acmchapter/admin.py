from django.contrib import admin
from .models import Upcomming,Past,Pastachievements,Projects,Gallery

# Register your models here.
admin.site.register(Pastachievements)
admin.site.register(Upcomming)
admin.site.register(Past)
admin.site.register(Projects)
admin.site.register(Gallery)