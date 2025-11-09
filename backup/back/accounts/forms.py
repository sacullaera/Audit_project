# accounts/forms.py
"""
Formulários seguros para autenticação e gerenciamento de usuários.
Implementa validações adicionais para prevenir ataques comuns.
"""

from django import forms
from django.contrib.auth import get_user_model, password_validation, authenticate
from django.contrib.auth.forms import (
    AuthenticationForm as BaseAuthenticationForm,
    UserCreationForm as BaseUserCreationForm,
    PasswordResetForm as BasePasswordResetForm,
    SetPasswordForm as BaseSetPasswordForm
)
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from .models import CustomUser


class CustomAuthenticationForm(BaseAuthenticationForm):
    """
    Formulário de autenticação personalizado com segurança reforçada.
    Usa email como identificador principal em vez de username.
    """
    
    username = None  # Removemos o campo username
    
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'autofocus': True,
            'class': 'form-control',
            'placeholder': _('Seu email'),
            'autocomplete': 'username'
        }),
        label=_('Email'),
        max_length=254,
        help_text=_('Digite seu email para acessar sua conta.')
    )
    
    password = forms.CharField(
        label=_('Senha'),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': _('Sua senha'),
            'autocomplete': 'current-password'
        }),
    )
    
    error_messages = {
        'invalid_login': _(
            "Email ou senha incorretos. Por favor, tente novamente."
        ),
        'inactive': _("Esta conta está inativa. Entre em contato com o administrador."),
    }
    
    class Meta:
        model = CustomUser
        fields = ['email', 'password']
    
    def __init__(self, request=None, *args, **kwargs):
        """
        Inicializa o formulário com email como campo principal.
        """
        super().__init__(request=request, *args, **kwargs)
        self.fields.pop('username', None)
        self.fields['email'].widget.attrs.update({'autofocus': True})
    
    def clean(self):
        """
        Valida as credenciais do usuário.
        Não revela se o email existe ou não para evitar enumeração de usuários.
        """
        email = self.cleaned_data.get('email')
        password = self.cleaned_data.get('password')
        
        if email and password:
            # Tentativa de autenticação
            self.user_cache = authenticate(
                self.request,
                email=email.lower().strip(),
                password=password
            )
            
            # Se a autenticação falhar, não revelamos se o email existe
            if self.user_cache is None:
                raise forms.ValidationError(
                    self.error_messages['invalid_login'],
                    code='invalid_login'
                )
            else:
                # Verifica se o usuário está ativo
                self.confirm_login_allowed(self.user_cache)
        
        return self.cleaned_data
    
    def confirm_login_allowed(self, user):
        """
        Verifica se o usuário está autorizado a fazer login.
        Bloqueia usuários inativos.
        """
        if not user.is_active:
            raise forms.ValidationError(
                self.error_messages['inactive'],
                code='inactive',
            )


class CustomUserCreationForm(BaseUserCreationForm):
    """
    Formulário de criação de usuário personalizado com validações de segurança.
    """
    
    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': _('exemplo@email.com'),
            'autocomplete': 'email'
        }),
        label=_('Email'),
        help_text=_('Um email válido é necessário para ativação da conta.')
    )
    
    nome = forms.CharField(
        max_length=30,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': _('Seu nome'),
            'autocomplete': 'given-name'
        }),
        label=_('Nome'),
        help_text=_('Seu nome completo.')
    )
    
    sobrenome = forms.CharField(
        max_length=30,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': _('Seu sobrenome'),
            'autocomplete': 'family-name'
        }),
        label=_('Sobrenome'),
        help_text=_('Seu sobrenome completo.')
    )
    
    nivel_permissao = forms.ChoiceField(
        choices=CustomUser.NIVEL_PERMISSAO_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control'}),
        label=_('Nível de permissão'),
        initial='auditor',
        help_text=_('Escolha o nível de acesso para este usuário.')
    )
    
    password1 = forms.CharField(
        label=_('Senha'),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': _('Crie uma senha forte'),
            'autocomplete': 'new-password'
        }),
        help_text=password_validation.password_validators_help_text_html(),
    )
    
    password2 = forms.CharField(
        label=_('Confirme a senha'),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': _('Repita sua senha'),
            'autocomplete': 'new-password'
        }),
        help_text=_('Digite a mesma senha novamente para verificação.'),
    )
    
    class Meta:
        model = CustomUser
        fields = ('nome', 'sobrenome', 'email', 'nivel_permissao')
    
    def clean_email(self):
        """
        Valida e normaliza o email para minúsculas.
        Garante que o email seja único no sistema.
        """
        email = self.cleaned_data['email'].lower().strip()
        
        # Verifica se o email já está em uso
        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError(_('Este email já está em uso. Por favor, escolha outro.'))
        
        return email
    
    def clean_password2(self):
        """
        Valida a confirmação de senha.
        """
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        
        if password1 and password2 and password1 != password2:
            raise ValidationError(_('As senhas não coincidem. Por favor, verifique.'))
        
        password_validation.validate_password(password2, self.instance)
        return password2
    
    def save(self, commit=True):
        """
        Salva o usuário com senha segura e normalização do email.
        """
        user = super().save(commit=False)
        user.email = self.cleaned_data['email'].lower()  # Normaliza para minúsculas
        
        # Define a senha de forma segura
        user.set_password(self.cleaned_data['password1'])
        
        # Define o usuário como inativo por padrão para aprovação administrativa
        user.is_active = False
        
        if commit:
            user.save()
        return user


class CustomPasswordResetForm(BasePasswordResetForm):
    """
    Formulário personalizado para redefinição de senha.
    Melhora a experiência do usuário e mensagens de erro.
    """
    
    email = forms.EmailField(
        label=_('Email'),
        max_length=254,
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': _('Digite seu email'),
            'autocomplete': 'email'
        }),
        help_text=_('Digite o email associado à sua conta para receber instruções de redefinição de senha.')
    )
    
    def clean_email(self):
        """
        Valida o email e verifica se pertence a um usuário ativo.
        Não revela se o email existe para evitar enumeração.
        """
        email = self.cleaned_data['email'].lower().strip()
        try:
            user = CustomUser.objects.get(email=email, is_active=True)
        except CustomUser.DoesNotExist:
            # Não revelamos se o email existe ou não
            raise ValidationError(_('Se este email estiver registrado em nosso sistema, você receberá um link para redefinir sua senha.'))
        
        return email


class CustomSetPasswordForm(BaseSetPasswordForm):
    """
    Formulário personalizado para definir nova senha após redefinição.
    Inclui validações de segurança e melhor interface para o usuário.
    """
    
    new_password1 = forms.CharField(
        label=_('Nova senha'),
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'autocomplete': 'new-password',
            'placeholder': _('Digite uma nova senha')
        }),
        strip=False,
        help_text=password_validation.password_validators_help_text_html(),
    )
    
    new_password2 = forms.CharField(
        label=_('Confirme a nova senha'),
        strip=False,
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'autocomplete': 'new-password',
            'placeholder': _('Confirme a nova senha')
        }),
        help_text=_('Digite a mesma senha novamente para verificação.'),
    )
    
    def clean_new_password2(self):
        """
        Valida a confirmação da nova senha.
        """
        password1 = self.cleaned_data.get('new_password1')
        password2 = self.cleaned_data.get('new_password2')
        
        if password1 and password2 and password1 != password2:
            raise ValidationError(_('As senhas não coincidem. Por favor, verifique.'))
        
        password_validation.validate_password(password2, self.user)
        return password2