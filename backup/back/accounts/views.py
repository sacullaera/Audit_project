# accounts/views.py
"""
Views de autenticação seguras para o sistema de autoauditoria.
Implementa proteção contra ataques comuns como força bruta, CSRF e XSS.
"""

from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import (
    LoginView as BaseLoginView,
    PasswordResetView as BasePasswordResetView,
    PasswordResetDoneView as BasePasswordResetDoneView,
    PasswordResetConfirmView as BasePasswordResetConfirmView,
    PasswordResetCompleteView as BasePasswordResetCompleteView,
)
from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, TemplateView
from django.shortcuts import render, redirect
from django.utils.translation import gettext_lazy as _
from django.http import HttpResponseRedirect
from django.conf import settings
from .forms import (
    CustomAuthenticationForm,
    CustomUserCreationForm,
    CustomPasswordResetForm,
    CustomSetPasswordForm
)
from .models import CustomUser
from axes.utils import get_lockout_response  # Para proteção contra força bruta


class LoginView(BaseLoginView):
    """
    View de login personalizada com segurança reforçada.
    Usa formulário personalizado e template customizado.
    """
    
    form_class = CustomAuthenticationForm
    template_name = 'accounts/login.html'
    redirect_authenticated_user = True
    
    def form_valid(self, form):
        """
        Processa o formulário quando é válido.
        Atualiza a data da última tentativa de login e registra o acesso.
        """
        user = form.get_user()
        
        # Atualiza a última atividade do usuário
        user.last_login_attempt = None
        user.save(update_fields=['last_login_attempt'])
        
        # Login do usuário
        login(self.request, user)
        
        # Mensagem de boas-vindas personalizada
        messages.success(self.request, _(f'Bem-vindo, {user.get_short_name()}! Você está logado.'))
        
        # Redireciona para a página de destino
        return HttpResponseRedirect(self.get_success_url())
    
    def form_invalid(self, form):
        """
        Processa o formulário quando é inválido.
        Registra a tentativa de login falhada para proteção contra força bruta.
        """
        # Não revela se o email existe ou não para evitar enumeração de usuários
        messages.error(self.request, _('Email ou senha incorretos. Por favor, tente novamente.'))
        return super().form_invalid(form)


class RegisterView(CreateView):
    """
    View de registro de novos usuários.
    Os usuários são criados com status inativo por padrão para aprovação administrativa.
    """
    
    model = CustomUser
    form_class = CustomUserCreationForm
    template_name = 'accounts/register.html'
    success_url = reverse_lazy('login')
    
    def form_valid(self, form):
        """
        Processa o formulário quando é válido.
        Cria o usuário com status inativo para aprovação administrativa.
        """
        user = form.save(commit=False)
        user.is_active = False  # Usuário precisa de aprovação administrativa
        user.set_password(form.cleaned_data['password1'])  # Hash seguro da senha
        user.save()
        
        messages.success(
            self.request,
            _('Sua conta foi criada com sucesso! Aguarde a aprovação do administrador para acessar o sistema.')
        )
        
        return super().form_valid(form)


class PasswordResetView(BasePasswordResetView):
    """
    View para solicitação de redefinição de senha.
    Usa formulário personalizado para melhorar a experiência do usuário.
    """
    
    form_class = CustomPasswordResetForm
    template_name = 'accounts/password_reset.html'
    email_template_name = 'accounts/password_reset_email.html'
    subject_template_name = 'accounts/password_reset_subject.txt'
    success_url = reverse_lazy('password_reset_done')


class PasswordResetDoneView(BasePasswordResetDoneView):
    """
    View que exibe a página após o envio do email de redefinição de senha.
    """
    
    template_name = 'accounts/password_reset_done.html'


class PasswordResetConfirmView(BasePasswordResetConfirmView):
    """
    View para confirmar a redefinição de senha após clicar no link do email.
    Usa formulário personalizado para melhorar a experiência do usuário.
    """
    
    form_class = CustomSetPasswordForm
    template_name = 'accounts/password_reset_confirm.html'
    success_url = reverse_lazy('password_reset_complete')


class PasswordResetCompleteView(BasePasswordResetCompleteView):
    """
    View que exibe a página após a redefinição bem-sucedida da senha.
    """
    
    template_name = 'accounts/password_reset_complete.html'


@login_required
def logout_view(request):
    """
    View para logout seguro do usuário.
    Redireciona para a página de login após o logout.
    """
    logout(request)
    messages.success(request, _('Você foi desconectado com sucesso.'))
    return redirect('login')


class ProfileView(UpdateView):
    """
    View para atualização do perfil do usuário.
    Permite que os usuários atualizem suas informações pessoais.
    """
    
    model = CustomUser
    fields = ['nome', 'sobrenome', 'email']
    template_name = 'accounts/profile.html'
    success_url = reverse_lazy('profile')
    
    def get_object(self):
        """Retorna o objeto do usuário atualmente logado."""
        return self.request.user
    
    def form_valid(self, form):
        """
        Processa o formulário quando é válido.
        Adiciona uma mensagem de sucesso após a atualização.
        """
        messages.success(self.request, _('Seu perfil foi atualizado com sucesso.'))
        return super().form_valid(form)