# core/models.py
"""
Modelos principais do sistema de autoauditoria, implementando os requisitos
da ISO/IEC 27034 para gerenciamento e validação de controles de segurança.
"""

from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model


User = get_user_model()


class NormaISO(models.Model):
    """
    Modelo que representa as normas ISO/IEC disponíveis para auditoria.
    Inicialmente contém as três normas mencionadas no projeto.
    """
    
    nome = models.CharField(
        _('nome'),
        max_length=100,
        unique=True,
        help_text=_('Nome completo da norma ISO/IEC (ex: ISO/IEC 27034-1)')
    )
    
    descricao = models.TextField(
        _('descrição'),
        help_text=_('Descrição detalhada da norma e seu escopo.')
    )
    
    codigo = models.CharField(
        _('código'),
        max_length=20,
        unique=True,
        help_text=_('Código identificador da norma (ex: 27034-1)')
    )
    
    versao = models.CharField(
        _('versão'),
        max_length=10,
        default='1.0',
        help_text=_('Versão da norma')
    )
    
    ativa = models.BooleanField(
        _('ativa'),
        default=True,
        help_text=_('Indica se esta norma está disponível para seleção.')
    )
    
    data_criacao = models.DateTimeField(_('data de criação'), auto_now_add=True)
    data_atualizacao = models.DateTimeField(_('data de atualização'), auto_now=True)

    class Meta:
        verbose_name = _('norma ISO')
        verbose_name_plural = _('normas ISO')
        ordering = ['codigo']

    def __str__(self):
        return f"{self.codigo} - {self.nome}"


class RequisitoNorma(models.Model):
    """
    Modelo que representa os requisitos específicos de uma norma ISO/IEC.
    Cada requisito pode ser avaliado durante o processo de auditoria.
    """
    
    norma = models.ForeignKey(
        NormaISO,
        on_delete=models.CASCADE,
        related_name='requisitos',
        verbose_name=_('norma')
    )
    
    codigo = models.CharField(
        _('código do requisito'),
        max_length=50,
        help_text=_('Código identificador do requisito dentro da norma.')
    )
    
    titulo = models.CharField(
        _('título'),
        max_length=200,
        help_text=_('Título descritivo do requisito.')
    )
    
    descricao = models.TextField(
        _('descrição'),
        help_text=_('Descrição detalhada do requisito e seu objetivo.')
    )
    
    contexto = models.TextField(
        _('contexto'),
        blank=True,
        null=True,
        help_text=_('Contexto de aplicação do requisito.')
    )
    
    controles_sugeridos = models.TextField(
        _('controles sugeridos'),
        blank=True,
        null=True,
        help_text=_('Controles de segurança sugeridos para atender este requisito.')
    )
    
    ordem = models.PositiveIntegerField(
        _('ordem'),
        default=0,
        help_text=_('Ordem de exibição do requisito na auditoria.')
    )
    
    ativo = models.BooleanField(
        _('ativo'),
        default=True,
        help_text=_('Indica se este requisito está disponível para auditoria.')
    )

    class Meta:
        verbose_name = _('requisito de norma')
        verbose_name_plural = _('requisitos de norma')
        ordering = ['norma', 'ordem']
        unique_together = ['norma', 'codigo']

    def __str__(self):
        return f"{self.norma.codigo}.{self.codigo} - {self.titulo}"


class Auditoria(models.Model):
    """
    Modelo que representa uma auditoria específica realizada por um usuário.
    Cada auditoria está associada a uma norma ISO/IEC selecionada.
    """
    
    STATUS_CHOICES = [
        ('rascunho', _('Rascunho')),
        ('em_andamento', _('Em Andamento')),
        ('concluida', _('Concluída')),
        ('arquivada', _('Arquivada')),
    ]
    
    usuario = models.ForeignKey(
        User,
        on_delete=models.PROTECT,  # Protege contra exclusão acidental de usuários
        related_name='auditorias',
        verbose_name=_('usuário'),
        help_text=_('Usuário que está realizando a auditoria.')
    )
    
    norma = models.ForeignKey(
        NormaISO,
        on_delete=models.PROTECT,
        related_name='auditorias',
        verbose_name=_('norma'),
        help_text=_('Norma ISO/IEC selecionada para esta auditoria.')
    )
    
    titulo = models.CharField(
        _('título'),
        max_length=200,
        help_text=_('Título descritivo para esta auditoria.')
    )
    
    descricao = models.TextField(
        _('descrição'),
        blank=True,
        null=True,
        help_text=_('Descrição detalhada do escopo desta auditoria.')
    )
    
    status = models.CharField(
        _('status'),
        max_length=20,
        choices=STATUS_CHOICES,
        default='rascunho',
        help_text=_('Status atual da auditoria.')
    )
    
    data_inicio = models.DateTimeField(
        _('data de início'),
        default=timezone.now,
        help_text=_('Data e hora em que a auditoria foi iniciada.')
    )
    
    data_conclusao = models.DateTimeField(
        _('data de conclusão'),
        blank=True,
        null=True,
        help_text=_('Data e hora em que a auditoria foi concluída.')
    )
    
    total_requisitos = models.PositiveIntegerField(
        _('total de requisitos'),
        default=0,
        help_text=_('Número total de requisitos a serem auditados.')
    )
    
    requisitos_conformes = models.PositiveIntegerField(
        _('requisitos conformes'),
        default=0,
        help_text=_('Número de requisitos em conformidade.')
    )
    
    requisitos_nao_conformes = models.PositiveIntegerField(
        _('requisitos não conformes'),
        default=0,
        help_text=_('Número de requisitos não conformes.')
    )
    
    criado_em = models.DateTimeField(_('criado em'), auto_now_add=True)
    atualizado_em = models.DateTimeField(_('atualizado em'), auto_now=True)

    class Meta:
        verbose_name = _('auditoria')
        verbose_name_plural = _('auditorias')
        ordering = ['-data_inicio']
        permissions = [
            ("view_own_auditoria", "Pode visualizar suas próprias auditorias"),
            ("conclude_auditoria", "Pode concluir uma auditoria"),
            ("export_audit_report", "Pode exportar relatórios de auditoria"),
        ]

    def __str__(self):
        return f"{self.titulo} - {self.norma.codigo} ({self.get_status_display()})"
    
    def calcular_status(self):
        """Calcula e atualiza o status da auditoria baseado na porcentagem de conclusão."""
        if self.total_requisitos == 0:
            return
        
        total_avaliados = self.itens.filter(status_avaliacao__isnull=False).count()
        if total_avaliados == self.total_requisitos:
            self.status = 'concluida'
            self.data_conclusao = timezone.now()
        elif total_avaliados > 0:
            self.status = 'em_andamento'
        else:
            self.status = 'rascunho'
        
        self.save(update_fields=['status', 'data_conclusao'])
    
    def calcular_conformidade(self):
        """Calcula e atualiza os totais de requisitos conformes e não conformes."""
        self.requisitos_conformes = self.itens.filter(status_avaliacao='conforme').count()
        self.requisitos_nao_conformes = self.itens.filter(status_avaliacao='nao_conforme').count()
        self.save(update_fields=['requisitos_conformes', 'requisitos_nao_conformes'])


class ItemAuditoria(models.Model):
    """
    Modelo que representa um item específico de auditoria, associado a um requisito da norma.
    Armazena a avaliação do requisito, evidências e comentários do auditor.
    """
    
    STATUS_AVALIACAO_CHOICES = [
        (None, _('Não avaliado')),
        ('conforme', _('Em conformidade')),
        ('nao_conforme', _('Não conforme')),
    ]
    
    auditoria = models.ForeignKey(
        Auditoria,
        on_delete=models.CASCADE,
        related_name='itens',
        verbose_name=_('auditoria')
    )
    
    requisito = models.ForeignKey(
        RequisitoNorma,
        on_delete=models.PROTECT,
        related_name='itens_auditoria',
        verbose_name=_('requisito')
    )
    
    status_avaliacao = models.CharField(
        _('status de avaliação'),
        max_length=20,
        choices=STATUS_AVALIACAO_CHOICES,
        blank=True,
        null=True,
        help_text=_('Status da avaliação deste requisito.')
    )
    
    comentario = models.TextField(
        _('comentário'),
        blank=True,
        null=True,
        help_text=_('Comentários adicionais sobre a avaliação deste requisito.')
    )
    
    evidencia = models.FileField(
        _('evidência'),
        upload_to='evidencias/%Y/%m/%d/',
        blank=True,
        null=True,
        validators=[
            FileExtensionValidator(
                allowed_extensions=['pdf', 'png', 'jpg', 'xlsx'],
                message=_('Apenas arquivos PDF, PNG, JPG e XLSX são permitidos.')
            )
        ],
        help_text=_('Arquivo de evidência que comprova a conformidade do requisito.')
    )
    
    tamanho_evidencia = models.PositiveIntegerField(
        _('tamanho da evidência'),
        blank=True,
        null=True,
        help_text=_('Tamanho do arquivo de evidência em bytes.')
    )
    
    data_avaliacao = models.DateTimeField(
        _('data de avaliação'),
        blank=True,
        null=True,
        help_text=_('Data e hora em que este requisito foi avaliado.')
    )
    
    avaliado_por = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='itens_avaliados',
        verbose_name=_('avaliado por')
    )

    class Meta:
        verbose_name = _('item de auditoria')
        verbose_name_plural = _('itens de auditoria')
        ordering = ['auditoria', 'requisito__ordem']
        unique_together = ['auditoria', 'requisito']

    def __str__(self):
        return f"{self.requisito.codigo} - {self.requisito.titulo} ({self.get_status_avaliacao_display() or 'Não avaliado'})"
    
    def clean(self):
        """
        Valida os dados antes de salvar, garantindo que:
        1. Para status 'conforme', deve haver uma evidência
        2. O arquivo de evidência não exceda 30MB
        """
        from django.core.exceptions import ValidationError
        
        # Validação para status conforme
        if self.status_avaliacao == 'conforme' and not self.evidencia:
            raise ValidationError({
                'evidencia': _('Para marcar como "Em conformidade", é necessário anexar uma evidência.')
            })
        
        # Validação de tamanho máximo do arquivo
        if self.evidencia and hasattr(self.evidencia, 'size'):
            if self.evidencia.size > 30 * 1024 * 1024:  # 30MB
                raise ValidationError({
                    'evidencia': _('O arquivo não pode exceder 30MB de tamanho.')
                })
            self.tamanho_evidencia = self.evidencia.size
    
    def save(self, *args, **kwargs):
        """
        Sobrescreve o método save para:
        1. Atualizar a data de avaliação quando o status é definido
        2. Atualizar o usuário que avaliou
        3. Chamar as validações personalizadas
        4. Atualizar os totais da auditoria após salvar
        """
        if self.status_avaliacao and not self.data_avaliacao:
            self.data_avaliacao = timezone.now()
        
        # Se o status mudou, atualiza o avaliado_por
        if self.status_avaliacao and not self.avaliado_por:
            # Se estiver em um contexto de request, pega o usuário atual
            # Caso contrário, mantém o valor existente ou deixa como None
            pass
        
        self.full_clean()  # Executa as validações antes de salvar
        super().save(*args, **kwargs)
        
        # Atualiza os totais da auditoria após salvar este item
        if self.auditoria:
            self.auditoria.calcular_conformidade()
            self.auditoria.calcular_status()
    
    def get_evidencia_url(self):
        """Retorna a URL para download da evidência, se existir."""
        if self.evidencia and hasattr(self.evidencia, 'url'):
            return self.evidencia.url
        return None
    
    def get_evidencia_tipo(self):
        """Retorna o tipo MIME do arquivo de evidência."""
        if not self.evidencia:
            return None
        
        extension = self.evidencia.name.split('.')[-1].lower()
        mime_types = {
            'pdf': 'application/pdf',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
        return mime_types.get(extension)