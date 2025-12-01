# auditoria/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('demo-login/', views.demo_login, name='demo_login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('questionario/', views.questionario, name='questionario'),
    path('salvar-resposta/', views.salvar_resposta, name='salvar_resposta'),
]