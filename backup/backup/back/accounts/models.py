# accounts/models.py
"""
Modelo de usuário personalizado com segurança reforçada.
Inclui campos específicos para o sistema de autoauditoria e
controles de segurança para proteção de dados sensíveis.
"""

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator, EmailValidator
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    """
    Gerenciador de usuários personalizado que utiliza email como identificador principal.
    Fornece métodos seguros para criação de usuários e superusuários.
    """
    
    def create_user(self, email, password=None, **extra_fields):
        """
        Cria e retorna um usuário com email e senha.
        Valida o formato do email e garante que o campo esteja em minúsculas.
        """
        if not email:
            raise ValueError(_('O Email é obrigatório'))
        
        email = self.normalize_email(email).lower()
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Hash seguro da senha
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        """
        Cria e retorna um superusuário com permissões administrativas completas.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superusuário precisa ter is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superusuário precisa ter is_superuser=True.'))
        
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    """
    Modelo de usuário personalizado com segurança reforçada.
    Substitui o modelo de usuário padrão do Django para maior controle de segurança.
    """
    
    username = None  # Removemos o campo username para usar apenas email
    
    email = models.EmailField(
        _('email'),
        unique=True,
        validators=[EmailValidator()],
        help_text=_('Endereço de email válido necessário para login.'),
        error_messages={
            'unique': _("Já existe um usuário com este email."),
        },
    )
    
    nome = models.CharField(
        _('nome'),
        max_length=30,
        validators=[
            RegexValidator(
                regex='^[a-zA-ZÀ-ÿ\s]*$',
                message=_('O nome só pode conter letras e espaços.'),
                code='invalid_name'
            )
        ],
        help_text=_('Seu nome completo.')
    )
    
    sobrenome = models.CharField(
        _('sobrenome'),
        max_length=30,
        validators=[
            RegexValidator(
                regex='^[a-zA-ZÀ-ÿ\s]*$',
                message=_('O sobrenome só pode conter letras e espaços.'),
                code='invalid_surname'
            )
        ],
        help_text=_('Seu sobrenome completo.')
    )
    
    NIVEL_PERMISSAO_CHOICES = [
        ('auditor', _('Auditor')),          # Pode realizar auditorias
        ('gestor', _('Gestor')),           # Pode gerenciar auditorias e usuários
        ('administrador', _('Administrador')),  # Controle total do sistema
    ]
    
    nivel_permissao = models.CharField(
        _('nível de permissão'),
        max_length=20,
        choices=NIVEL_PERMISSAO_CHOICES,
        default='auditor',
        help_text=_('Define as permissões do usuário no sistema.')
    )
    
    is_active = models.BooleanField(
        _('ativo'),
        default=False,
        help_text=_('Indica se o usuário está ativo. Desative para desativar o acesso.')
    )
    
    last_login_attempt = models.DateTimeField(
        _('última tentativa de login'),
        null=True,
        blank=True,
        help_text=_('Registra a última tentativa de login para monitoramento de segurança.')
    )

    # Campos para controle de segurança e compliance
    date_joined = models.DateTimeField(_('data de adesão'), default=timezone.now)
    last_activity = models.DateTimeField(_('última atividade'), null=True, blank=True)
    
    # Metadados para auditoria de segurança
    created_at = models.DateTimeField(_('criado em'), auto_now_add=True)
    updated_at = models.DateTimeField(_('atualizado em'), auto_now=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome', 'sobrenome', 'nivel_permissao']

    class Meta:
        verbose_name = _('usuário')
        verbose_name_plural = _('usuários')
        ordering = ['-date_joined']
        indexes = [
            models.Index(fields=['email']),
            models.Index(fields=['nivel_permissao']),
        ]

    def __str__(self):
        return f"{self.nome} {self.sobrenome} ({self.email})"

    def get_full_name(self):
        """Retorna o nome completo do usuário formatado."""
        return f"{self.nome} {self.sobrenome}".strip()

    def get_short_name(self):
        """Retorna apenas o primeiro nome do usuário."""
        return self.nome

    def update_last_activity(self):
        """Atualiza o registro da última atividade do usuário."""
        self.last_activity = timezone.now()
        self.save(update_fields=['last_activity'])