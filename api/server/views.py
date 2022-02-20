from sys import hash_info
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from server.models import User
from django.contrib.auth.hashers import make_password, check_password
import json
from django.forms.models import model_to_dict

def createUser(request):
    body= JSONParser().parse(request)
    firstName, lastName, email, password = [body[k] for k in ('firstName', 'lastName','email','password')]
    uniqueEmail = True
    user = {}
    returnedUsers = User.objects.filter(email=email)
    if len(returnedUsers) > 0:
        uniqueEmail = False
        print('user with this email already exists!')
    else:
        hashedPass = make_password(password)
        user = User.objects.create(firstName=firstName,lastName=lastName,email=email,password=hashedPass)
        user = model_to_dict(user)
        user_id = user['id']
        user.pop('id')
        user['user_id'] = user_id
    
    data={
        'uniqueEmail': uniqueEmail,
        'user': user
    }
    return JsonResponse(data)


def verifyUser(request):
    body= JSONParser().parse(request)
    email,password = [body[k] for k in ('email','password')]
    user = User.objects.filter(email=email)
    if len(user) > 0:
        user = model_to_dict(user[0])
        hashedPass = user['password']
        verified = check_password(password,hashedPass)
        user_id = user['id']
        user.pop('id')
        user.pop('password')
        user['user_id'] = user_id
        if not verified:
            user = {}
    else:
        user = {}
        verified = False
    data= {
        'verified': verified,
        'user': user
    }
    return JsonResponse(data)

def updateState(request):
    body= JSONParser().parse(request)
    user_id,state = [body[k] for k in ('user_id','state')]
    user = User.objects.filter(id=user_id)
    user = user[0]
    user.state = state
    user.save()

    data={

    }
    return JsonResponse(data)

