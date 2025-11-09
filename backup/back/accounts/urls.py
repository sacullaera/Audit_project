# accounts/urls.py
"""
URLs para o app de autenticação.
Define rotas para login, registro, recuperação de senha e perfil.
"""

from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # Login e Logout
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    
    # Registro de novos usuários
    path('register/', views.RegisterView.as_view(), name='register'),
    
    # Recuperação de senha
    path('password-reset/', 
         views.PasswordResetView.as_view(), 
         name='password_reset'),
    path('password-reset/done/', 
         views.PasswordResetDoneView.as_view(), 
         name='password_reset_done'),
    path('password-reset/confirm/<uidb64>/<token>/', 
         views.PasswordResetConfirmView.as_view(), 
         name='password_reset_confirm'),
    path('password-reset/complete/', 
         views.PasswordResetCompleteView.as_view(), 
         name='password_reset_complete'),
    
    # Perfil do usuário
    path('profile/', views.ProfileView.as_view(), name='profile'),
    
    # Página de bloqueio por força bruta
    path('locked/', auth_views.TemplateView.as_view(template_name='accounts/lockout.html'), name='locked_out'),
]