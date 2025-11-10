# projeto_n2/settings.py
"""
Configurações de segurança para o projeto de autoauditoria.
As configurações seguem as melhores práticas recomendadas pela OWASP
e as diretrizes de segurança do Django.
"""

import os
from pathlib import Path
import dj_database_url

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
# Em produção, esta chave deve ser definida via variável de ambiente
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'di3ry2l(ve=ha=_#ruhr^m37g_)(r*(7m2w9m9-+@buj=d_0nf')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DJANGO_DEBUG', 'False') == 'True'

# Configuração de hosts seguros
ALLOWED_HOSTS = os.environ.get('DJANGO_ALLOWED_HOSTS', 'localhost,127.0.0.1').split(',')

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',  # Para formatar números de forma legível
    
    # Bibliotecas de terceiros para segurança e funcionalidades
    'crispy_forms',  # Para formulários seguros e formatados
    'crispy_bootstrap5',
    'django_extensions',  # Para ferramentas de desenvolvimento seguras
    'axes',  # Para proteção contra ataques de força bruta
    
    # Apps do projeto
    'accounts',  # App de autenticação
    'core',      # App principal com funcionalidades de auditoria
]

# Middleware de segurança
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',  # Proteção contra CSRF
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',  # Proteção contra clickjacking
    'axes.middleware.AxesMiddleware',  # Proteção contra força bruta
]

# Configurações de segurança adicionais
SECURE_BROWSER_XSS_FILTER = True  # Proteção contra XSS
SECURE_CONTENT_TYPE_NOSNIFF = True  # Impede MIME sniffing
SECURE_SSL_REDIRECT = os.environ.get('DJANGO_SECURE_SSL_REDIRECT', 'False') == 'True'  # Redireciona para HTTPS em produção
SESSION_COOKIE_SECURE = os.environ.get('DJANGO_SESSION_COOKIE_SECURE', 'False') == 'True'  # Cookies seguros
CSRF_COOKIE_SECURE = os.environ.get('DJANGO_CSRF_COOKIE_SECURE', 'False') == 'True'  # CSRF cookies seguros
X_FRAME_OPTIONS = 'DENY'  # Proteção contra clickjacking

# Configuração de URL raiz
ROOT_URLCONF = 'projeto_n2.urls'

# Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates',
                 BASE_DIR / 'Front',
                 ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'core.context_processors.audit_totals',  # Processador de contexto para totais de auditoria
            ],
        },
    },
]

WSGI_APPLICATION = 'projeto_n2.wsgi.application'

# Banco de dados (usando variável de ambiente em produção)
DATABASE_URL = os.environ.get('DATABASE_URL')
if DATABASE_URL:
    DATABASES = {
        'default': dj_database_url.config(default=DATABASE_URL, conn_max_age=600)
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Validação de senha forte
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 10,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internacionalização
LANGUAGE_CODE = 'pt-br'
TIME_ZONE = 'America/Sao_Paulo'
USE_I18N = True
USE_TZ = True

# Arquivos estáticos
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Configuração de uploads
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Configuração do usuário customizado
AUTH_USER_MODEL = 'accounts.CustomUser'

# Configuração de login
LOGIN_URL = '/accounts/login/'
LOGIN_REDIRECT_URL = '/dashboard/'
LOGOUT_REDIRECT_URL = '/accounts/login/'

# Configuração do Axes para proteção contra força bruta
AXES_FAILURE_LIMIT = 5  # Número máximo de tentativas falhas
AXES_LOCKOUT_TIME = 1  # Tempo de bloqueio em horas
AXES_COOLOFF_TIME = 1  # Tempo de espera após falhas
AXES_LOCKOUT_TEMPLATE = 'accounts/lockout.html'  # Página de bloqueio personalizada

# Configuração do Crispy Forms
CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Configuração de email para recuperação de senha
EMAIL_BACKEND = os.environ.get('DJANGO_EMAIL_BACKEND', 'django.core.mail.backends.console.EmailBackend')
EMAIL_HOST = os.environ.get('DJANGO_EMAIL_HOST', '')
EMAIL_PORT = os.environ.get('DJANGO_EMAIL_PORT', 587)
EMAIL_USE_TLS = os.environ.get('DJANGO_EMAIL_USE_TLS', 'True') == 'True'
EMAIL_HOST_USER = os.environ.get('DJANGO_EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('DJANGO_EMAIL_HOST_PASSWORD', '')
DEFAULT_FROM_EMAIL = os.environ.get('DJANGO_DEFAULT_FROM_EMAIL', 'no-reply@autoauditoria.com.br')

# Limite de tamanho de upload (30MB)
DATA_UPLOAD_MAX_MEMORY_SIZE = 30 * 1024 * 1024  # 30MB em bytes
FILE_UPLOAD_MAX_MEMORY_SIZE = 30 * 1024 * 1024  # 30MB em bytes