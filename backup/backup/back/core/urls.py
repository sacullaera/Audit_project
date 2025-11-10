# core/urls.py
"""
URLs para o app principal (core).
Define rotas para o dashboard e outras funcionalidades principais.
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),
    path('auditoria/<int:auditoria_id>/', views.formulario_auditoria, name='formulario_auditoria'),
    path('relatorio/<int:auditoria_id>/pdf/', views.RelatorioPDFView.as_view(), name='relatorio_pdf'),
]
