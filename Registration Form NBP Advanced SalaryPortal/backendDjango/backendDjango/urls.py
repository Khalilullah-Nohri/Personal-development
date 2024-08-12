"""
URL configuration for backendDjango project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('api.urls')),       # so UNDERSTAND THIS CONCEPT:  This mentioned path is called and  by default URL is http://127.0.0.1:8000/ this , then
                                            #  inside my api/urls.py the path is   path('', main) this and that will call main function , 
                                            #   so I didn't mention any path , so if I set path of api/urls.py is path('home', main) then URL will be http://127.0.0.1:8000/home and
                                            #  with this if I set this file path like    path('api/', include('api.urls')) then URL will be http://127.0.0.1:8000/api/home
                                            #  and we can set multiple path like  api/urls.py be like  path('', main)

 path('apii/', include('registration.urls'))
]

# 'domain.com/admin/....' after this 1st slash, will be sent to this above  file/list/path, ... dots means  so what ever url is like here is 'admin', will dispatch and sent to  admin.site.urls 