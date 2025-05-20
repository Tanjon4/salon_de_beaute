from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home/home_page.html')

def register_page(request):
    return render(request,'auth/register.html')

def login_page(request):
    return render(request,'auth/login.html')