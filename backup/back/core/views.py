# core/views.py
"""
Views principais do sistema de autoauditoria.
Implementa o dashboard com informações de conformidade e não conformidade.
"""
from django.db import transaction
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Count, Q
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Auditoria, RequisitoNorma, ItemAuditoria
from accounts.models import CustomUser
from django.http import HttpResponse, Http404
from django.template.loader import render_to_string
from weasyprint import HTML
from django.utils.decorators import method_decorator
from django.views import View
from django.contrib import messages
from django.core.exceptions import ValidationError


class DashboardView(LoginRequiredMixin, TemplateView):
    """
    View do dashboard que exibe métricas de conformidade e atividades recentes.
    Exige autenticação do usuário para acesso.
    """
    
    template_name = 'core/dashboard.html'
    
    def get_context_data(self, **kwargs):
        """
        Adiciona dados de contexto para o dashboard incluindo:
        1. Total de auditorias por status
        2. Métricas de conformidade geral
        3. Auditorias recentes
        4. Requisitos pendentes
        5. Dados para gráficos
        """
        context = super().get_context_data(**kwargs)
        user = self.request.user
        
        # Filtrar auditorias pelo usuário (se não for administrador)
        if user.nivel_permissao != 'administrador':
            auditorias = Auditoria.objects.filter(usuario=user)
        else:
            auditorias = Auditoria.objects.all()
        
        # Métricas básicas
        total_auditorias = auditorias.count()
        auditorias_concluidas = auditorias.filter(status='concluida').count()
        auditorias_em_andamento = auditorias.filter(status='em_andamento').count()
        auditorias_rascunho = auditorias.filter(status='rascunho').count()
        
        # Cálculo de conformidade geral
        total_requisitos = 0
        total_conformes = 0
        total_nao_conformes = 0
        
        # Obter totais de todas as auditorias concluídas
        for auditoria in auditorias.filter(status='concluida'):
            total_requisitos += auditoria.total_requisitos
            total_conformes += auditoria.requisitos_conformes
            total_nao_conformes += auditoria.requisitos_nao_conformes
        
        # Calcular percentuais
        percentual_conformes = 0
        percentual_nao_conformes = 0
        
        if total_requisitos > 0:
            percentual_conformes = (total_conformes / total_requisitos) * 100
            percentual_nao_conformes = (total_nao_conformes / total_requisitos) * 100
        
        # Auditorias recentes (últimas 5)
        auditorias_recentes = auditorias.order_by('-data_inicio')[:5]
        
        # Requisitos pendentes para auditorias em andamento
        requisitos_pendentes = 0
        if user.nivel_permissao != 'administrador':
            itens_pendentes = ItemAuditoria.objects.filter(
                auditoria__usuario=user,
                auditoria__status='em_andamento',
                status_avaliacao__isnull=True
            )
        else:
            itens_pendentes = ItemAuditoria.objects.filter(
                auditoria__status='em_andamento',
                status_avaliacao__isnull=True
            )
        
        requisitos_pendentes = itens_pendentes.count()
        
        # Dados para gráfico de conformidade por norma
        normas_data = []
        normas = auditorias.values('norma__codigo', 'norma__nome').annotate(
            total=Count('id'),
            conformes=Count('id', filter=Q(status='concluida')),
        ).order_by('norma__codigo')
        
        for norma in normas:
            normas_data.append({
                'nome': f"{norma['norma__codigo']} - {norma['norma__nome']}",
                'total': norma['total'],
                'conformes': norma['conformes'],
                'nao_conformes': norma['total'] - norma['conformes']
            })
        
        # Montar contexto
        context.update({
            'total_auditorias': total_auditorias,
            'auditorias_concluidas': auditorias_concluidas,
            'auditorias_em_andamento': auditorias_em_andamento,
            'auditorias_rascunho': auditorias_rascunho,
            'total_requisitos': total_requisitos,
            'total_conformes': total_conformes,
            'total_nao_conformes': total_nao_conformes,
            'percentual_conformes': round(percentual_conformes, 1),
            'percentual_nao_conformes': round(percentual_nao_conformes, 1),
            'auditorias_recentes': auditorias_recentes,
            'requisitos_pendentes': requisitos_pendentes,
            'normas_data': normas_data,
            'hoje': timezone.now().date(),
        })
        
        return context


@login_required
def home_redirect(request):
    """
    Redireciona para o dashboard após login.
    """
    return redirect('dashboard')

@method_decorator(login_required, name='dispatch')
class RelatorioPDFView(View):
    def get(self, request, auditoria_id):
        auditoria = Auditoria.objects.get(id=auditoria_id, usuario=request.user)
        
@method_decorator(login_required, name='dispatch')
class RelatorioPDFView(View):
    def get(self, request, auditoria_id):
        auditoria = Auditoria.objects.get(id=auditoria_id, usuario=request.user)
        
        # Dados para o relatório
        total = auditoria.total_requisitos
        conformes = auditoria.requisitos_conformes
        nao_conformes = auditoria.requisitos_nao_conformes
        percentual_conformes = round((conformes / total * 100), 1) if total > 0 else 0

        # Renderiza o template HTML
        html_string = render_to_string('core/relatorio_pdf.html', {
            'auditoria': auditoria,
            'total': total,
            'conformes': conformes,
            'nao_conformes': nao_conformes,
            'percentual_conformes': percentual_conformes,
            'data_geracao': timezone.now().strftime('%d/%m/%Y às %H:%M')
        })

        # Gera PDF
        pdf = HTML(string=html_string).write_pdf()

        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = f'inline; filename="relatorio_auditoria_{auditoria.id}.pdf"'
        return response

@login_required
def formulario_auditoria(request, auditoria_id):
    auditoria = get_object_or_404(Auditoria, id=auditoria_id, usuario=request.user)
    requisitos = RequisitoNorma.objects.filter(norma=auditoria.norma).order_by('ordem')
    
    # Pré-carregar itens existentes
    itens_existentes = ItemAuditoria.objects.filter(auditoria=auditoria)
    itens_dict = {item.requisito.id: item for item in itens_existentes}

    if request.method == 'POST':
        try:
            with transaction.atomic():  # Transação para garantir integridade
                for requisito in requisitos:
                    status = request.POST.get(f'status_{requisito.id}')
                    comentario = request.POST.get(f'comentario_{requisito.id}', '').strip()
                    evidencia = request.FILES.get(f'evidencia_{requisito.id}')
                    
                    # Atualizar ou criar item
                    item, created = ItemAuditoria.objects.get_or_create(
                        auditoria=auditoria,
                        requisito=requisito,
                        defaults={'status_avaliacao': status, 'comentario': comentario}
                    )
                    
                    if not created:
                        item.status_avaliacao = status
                        item.comentario = comentario
                        if evidencia:
                            item.evidencia = evidencia
                    
                    # Validação explícita antes de salvar
                    if status == 'conforme' and not (item.evidencia or evidencia):
                        messages.error(request, f'O requisito "{requisito.codigo}" requer evidência para estar "Em conformidade".')
                        return redirect('formulario_auditoria', auditoria_id=auditoria.id)
                    
                    # Validação de tamanho (extra)
                    if evidencia and evidencia.size > 30 * 1024 * 1024:
                        messages.error(request, f'O arquivo "{evidencia.name}" excede o limite de 30MB.')
                        return redirect('formulario_auditoria', auditoria_id=auditoria.id)
                    
                    item.save()
                
                messages.success(request, 'Avaliações salvas com sucesso!')
                return redirect('formulario_auditoria', auditoria_id=auditoria.id)
                
        except ValidationError as e:
            messages.error(request, str(e))
        except Exception as e:
            messages.error(request, 'Erro ao salvar. Tente novamente.')
            return redirect('formulario_auditoria', auditoria_id=auditoria.id)

    context = {
        'auditoria': auditoria,
        'requisitos': requisitos,
        'itens_dict': itens_dict,
    }
    return render(request, 'core/formulario_auditoria.html', context)