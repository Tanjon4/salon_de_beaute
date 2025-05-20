from django.urls import path
from . import views

urlpatterns = [
    path('', views.home , name='home'),
    path('', views.register_page, name='register'),
    path('',views.login_page, name='login')
]