

from django.urls import path, include
from server import views
urlpatterns = [

    path('create-user', views.createUser),
    path('verify-user',views.verifyUser),
    path('update-state',views.updateState)
]