# projeto_n2/urls.py
"""
Configuração de URLs principal do projeto.
Define as rotas para autenticação, dashboard e administração.
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView, TemplateView
from core.views import home_redirect

urlpatterns = [
    # Redirecionamento para dashboard
    path('', home_redirect, name='home'),
    
    # Administração
    path('admin/', admin.site.urls),
    
    # Autenticação
    path('accounts/', include('accounts.urls')),
    
    # Dashboard e funcionalidades principais
    path('dashboard/', include('core.urls')),
    
    # Proteção contra acesso a URLs sem permissão
    path('403/', TemplateView.as_view(template_name='errors/403.html'), name='forbidden'),
    path('404/', TemplateView.as_view(template_name='errors/404.html'), name='not_found'),
    path('500/', TemplateView.as_view(template_name='errors/500.html'), name='server_error'),
]

# Configuração para arquivos de mídia em desenvolvimento
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)