from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.serializers import serialize
from django.forms.models import model_to_dict
import json

from auditoria.models import Requisito

@require_http_methods(["POST"])
def salvar_resposta(request):
    if not request.user.is_authenticated:
        return JsonResponse({'ok': False, 'erro': 'Usuário não autenticado'})
    
    try:
        requisito_id = request.POST.get('requisito_id')
        conformidade = request.POST.get('conformidade')
        observacoes = request.POST.get('observacoes', '')
        arquivo = request.FILES.get('arquivo')

        from .models import Requisito, Resposta
        requisito = Requisito.objects.get(id=requisito_id)
        
        Resposta.objects.update_or_create(
            usuario=request.user,
            requisito=requisito,
            defaults={
                'conformidade': conformidade,
                'observacoes': observacoes,
                'arquivo_evidencia': arquivo
            }
        )
        return JsonResponse({'ok': True})
    except Exception as e:
        return JsonResponse({'ok': False, 'erro': str(e)})

def index(request):
    """Tela de login inicial"""
    if request.user.is_authenticated:
        return redirect('dashboard')
    return render(request, 'index.html')

def demo_login(request):
    """Login automático como 'aluno'"""
    user, created = User.objects.get_or_create(username='aluno')
    if created:
        user.set_password('fatec123')
        user.save()
    login(request, user)
    return redirect('dashboard')  # ← agora vai para o dashboard

def dashboard(request):
    """Painel de escolha da norma"""
    if not request.user.is_authenticated:
        return redirect('index')
    return render(request, 'dashboard.html')

def questionario(request):
    if not request.user.is_authenticated:
        return redirect('index')
    requisitos = Requisito.objects.all()
    import json
    requisitos_json = [
        {"id": r.id, "secao": r.secao, "pergunta_texto": r.pergunta_texto}
        for r in requisitos
    ]
    return render(request, 'questionario.html', {
        'requisitos': requisitos,
        'requisitos_json': json.dumps(requisitos_json, ensure_ascii=False)
    })
   