# encoding:utf-8
import json

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from home.models import User
from website.settings import BASE_DIR


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def news(request):
    f = file(BASE_DIR+'/home/news.json')
    news = json.load(f)
    news = news['data']
    f.close()
    return render(request, 'blog.html',{'news':news})


def news_item(request, id):
    index = int(id) - 1
    f = file(BASE_DIR+'/home/new_items.json')
    news = json.load(f)
    news = news['data']
    f.close()
    new = news[index]
    return render(request, 'single.html',{'new':new})

def case(request,id):
    index = int(id) - 1
    f = file(BASE_DIR+'/home/cases.json')
    cases = json.load(f)
    cases = cases['data']
    f.close()
    case = cases[0] #cases[index]
    return render(request,'single.html',{'case':case})


def profile(request):
    return render(request, 'profile.html')


def services(request):
    return render(request, 'services.html')


def messages(request):
    return render(request, 'contact.html')


def product(request):
    # return render(request,'quality_enter.html')
    # return render(request,'signup.html')
    username = request.COOKIES.get('username','')
    if not username:
        return HttpResponseRedirect('/home/login/')
    else:
        return render(request, '404.html')


def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = User.objects.filter(username=username)
        result = {}
        if user.count() > 0:
            result['code'] = 1
            result['message'] = u'该用户已经存在'
            result = json.dumps(result)
            return HttpResponse(result,content_type="application/json")
        user = User(username=username,password=password)
        user.save()
        result['code'] = 0
        result['message'] = u'注册成功，请进行风险测试'
        result = json.dumps(result)
        response =  HttpResponse(result,content_type="application/json")
        response.set_cookie('username',username,1800)
        return response
    else:
        return render(request, 'signup.html')


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = User.objects.filter(username=username, password=password)
        if user:
            user = user[0]
            if user.quality:
                response =  HttpResponseRedirect('/home/product/')
            else:
                response =  HttpResponseRedirect('/home/quality/')
            response.set_cookie('username',username,1800)
            return response
        else:
            return render(request, 'form_success.html', {'redirect': '/home/login/', 'message': u'登陆失败，请确认用户名或密码是否正确'})
    else:
        return render(request, 'signin.html')


def quality(request):
    if request.method == 'POST':
        gps010B13 = request.POST.get('gps010B13')
        if gps010B13 == 'A':
            pass
        elif gps010B13 == 'B':
            pass
        elif gps010B13 == 'C':
            pass
        else:
            pass
        username = request.COOKIES.get('username','')
        if not username:
            return HttpResponseRedirect('/home/login/')
        else:
            User.objects.filter(username=username).update(type=gps010B13, quality=True)
            return HttpResponseRedirect('/home/product/')
    else:
        return render(request, 'quality.html')
