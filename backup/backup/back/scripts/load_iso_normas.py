# Projeto-N2-main/Backup/Back/scripts/load_iso_normas.py
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'projeto_n2.settings')
django.setup()

from core.models import NormaISO

def carregar_normas():
    normas = [
        {
            'codigo': '27034-1',
            'nome': 'ISO/IEC 27034-1:2011',
            'descricao': 'Visão geral e conceitos de segurança de aplicações. Define o escopo, princípios e estrutura do framework ISO/IEC 27034.',
            'ativa': True
        },
        {
            'codigo': '27034-3',
            'nome': 'ISO/IEC 27034-3:2018',
            'descricao': 'Define o Processo de Gestão de Segurança da Aplicação (ASMP), com 5 etapas para integrar segurança no ciclo de vida.',
            'ativa': True
        },
        {
            'codigo': '27034-5',
            'nome': 'ISO/IEC 27034-5:2017',
            'descricao': 'Define a estrutura de dados e protocolos para Controles de Segurança de Aplicação (ASCs) e o Modelo de Referência de Ciclo de Vida (ASLCRM).',
            'ativa': True
        }
    ]

    for norma_data in normas:
        norma, created = NormaISO.objects.get_or_create(
            codigo=norma_data['codigo'],
            defaults={
                'nome': norma_data['nome'],
                'descricao': norma_data['descricao'],
                'ativa': norma_data['ativa']
            }
        )
        if created:
            print(f"✅ Norma criada: {norma.nome}")
        else:
            print(f"⚠️ Norma já existente: {norma.nome}")

if __name__ == '__main__':
    print("📊 Carregando normas ISO/IEC 27034...")
    carregar_normas()
    print("✅ Processo concluído!")