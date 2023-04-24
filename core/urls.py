"""
Goblin Project.
Develope by Raymond Ma'ruf
"""

from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='welcome'),
    path('admin/', admin.site.urls),
]
