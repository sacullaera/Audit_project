# auditoria/models.py
from django.db import models
from django.contrib.auth.models import User

class Requisito(models.Model):
    secao = models.CharField(max_length=300)        # ex: "1.1 Estabelecendo o comitê do ONF"
    pergunta_texto = models.TextField()            # ex: "Quais evidências comprovam...?"
    fonte = models.CharField(max_length=100, default="ISO/IEC 27034")

    def __str__(self):
        return f"{self.secao} → {self.pergunta_texto[:50]}..."

class Resposta(models.Model):
    CONFORMIDADE_CHOICES = [
        ('ATENDE', 'Atende'),
        ('PARCIAL', 'Atende parcialmente'),
        ('NAO_ATENDE', 'Não atende'),
        ('NAO_SE_APLICA', 'Não se aplica'),
    ]

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    requisito = models.ForeignKey(Requisito, on_delete=models.CASCADE)
    conformidade = models.CharField(max_length=20, choices=CONFORMIDADE_CHOICES)
    observacoes = models.TextField(blank=True)
    arquivo_evidencia = models.FileField(upload_to='evidencias/', null=True, blank=True)
    respondido_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'requisito')