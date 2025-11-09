# Back/scripts/load_iso_data.py
"""
Script para carregar os requisitos principais das normas ISO/IEC 27034-1, -3 e -5
com base nos documentos oficiais fornecidos.

Este script insere:
- 3 Normas ISO
- 10 requisitos por norma (exemplo realista baseado nos PDFs)
"""

import os
import django

# Configuração do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'projeto_n2.settings')
django.setup()

from core.models import NormaISO, RequisitoNorma

def carregar_normas_e_requisitos():
    print("🗂️  Carregando normas ISO/IEC 27034...")

    # 1. Norma ISO/IEC 27034-1:2011 — Overview and concepts
    norma1, created1 = NormaISO.objects.get_or_create(
        codigo='27034-1',
        nome='ISO/IEC 27034-1:2011',
        descricao='Visão geral e conceitos de segurança de aplicações. Define o escopo, princípios e estrutura do framework ISO/IEC 27034.'
    )

    requisitos_27034_1 = [
        ('4.1', 'Gestão de Riscos de Segurança', 'Definir, implementar e manter um processo contínuo de avaliação de riscos de segurança da aplicação.'),
        ('4.2', 'Nível de Confiança Alvo', 'Estabelecer um Nível de Confiança Alvo (Targeted Level of Trust) com base na análise de riscos.'),
        ('5.1', 'Escopo da Segurança da Aplicação', 'Proteger não apenas o software, mas todo o contexto: dados, infraestrutura, processos e atores envolvidos.'),
        ('5.2', 'Requisitos de Segurança', 'Identificar requisitos de segurança a partir de contextos de negócio, regulatório e tecnológico.'),
        ('6.3', 'Contexto de Negócio', 'Documentar processos, políticas e práticas de negócio que impactam a segurança da aplicação.'),
        ('6.4', 'Contexto Regulatório', 'Identificar leis, regulamentos e normas aplicáveis à aplicação e seus dados.'),
        ('6.5', 'Contexto Tecnológico', 'Descrever a infraestrutura tecnológica (hardware, software, redes) utilizada pela aplicação.'),
        ('7.1', 'Propriedade da Aplicação', 'Designar um "Application Owner" responsável pela segurança e conformidade da aplicação.'),
        ('8.2', 'Análise de Risco Detalhada', 'Realizar análise de risco detalhada durante a fase de realização do ciclo de vida.'),
        ('8.5', 'Auditoria de Segurança', 'Verificar se os controles de segurança foram implementados corretamente e produziram os resultados esperados.'),
    ]

    # 2. Norma ISO/IEC 27034-3:2018 — Application Security Management Process
    norma2, created2 = NormaISO.objects.get_or_create(
        codigo='27034-3',
        nome='ISO/IEC 27034-3:2018',
        descricao='Define o Processo de Gestão de Segurança da Aplicação (ASMP), com 5 etapas para integrar segurança no ciclo de vida.'
    )

    requisitos_27034_3 = [
        ('6.1', 'Identificação de Requisitos', 'Identificar requisitos da aplicação e seu ambiente (contextos de negócio, regulatório e tecnológico).'),
        ('6.2', 'Avaliação de Riscos', 'Realizar análise de riscos de segurança da aplicação e definir requisitos de segurança.'),
        ('6.3', 'Framework Normativo da Aplicação (ANF)', 'Criar e manter o ANF com controles de segurança selecionados.'),
        ('6.4', 'Implementação e Operação', 'Implementar os controles de segurança (ASCs) durante o ciclo de vida da aplicação.'),
        ('6.5', 'Auditoria de Segurança', 'Auditar a segurança da aplicação para verificar conformidade com o Nível de Confiança Alvo.'),
        ('5.3.2', 'Comunicação de Responsabilidades', 'Definir e comunicar claramente papéis e responsabilidades (ex: RACI).'),
        ('5.3.3', 'Relação com o ONF', 'Utilizar o Framework Normativo Organizacional (ONF) como base para o ANF.'),
        ('5.3.5', 'Nível de Confiança', 'Utilizar "Níveis de Confiança" para agrupar controles de segurança (ASCs).'),
        ('6.1.3', 'Resultados Esperados', 'Produzir ANF preliminar com descrição dos contextos e requisitos da aplicação.'),
        ('6.5.3', 'Resultados da Auditoria', 'Demonstrar o Nível de Confiança Real (Actual Level of Trust) da aplicação.'),
    ]

    # 3. Norma ISO/IEC 27034-5:2017 — Protocols and ASC Data Structure
    norma3, created3 = NormaISO.objects.get_or_create(
        codigo='27034-5',
        nome='ISO/IEC 27034-5:2017',
        descricao='Define a estrutura de dados e protocolos para Controles de Segurança de Aplicação (ASCs) e o Modelo de Referência de Ciclo de Vida (ASLCRM).'
    )

    requisitos_27034_5 = [
        ('5.2.4.1', 'Identificação do ASC', 'Cada ASC deve ter identificação única (UID), nome, descrição e metadados de versão.'),
        ('5.2.4.2', 'Objetivos do ASC', 'Especificar os requisitos de segurança atendidos, níveis de confiança e condições de uso.'),
        ('5.2.4.3', 'Atividade de Segurança', 'Definir a atividade de segurança: o quê, quem, como, quando, onde e esforço necessário.'),
        ('5.2.4.3', 'Medição de Verificação', 'Definir como verificar se a atividade de segurança foi executada corretamente.'),
        ('6.1', 'Modelo de Referência de Ciclo de Vida', 'Utilizar o ASLCRM para alinhar ASCs às fases do ciclo de vida da aplicação.'),
        ('6.2', 'Camada de Gestão de Aplicação', 'Definir atividades de gestão: iniciação, planejamento, execução, monitoramento e encerramento.'),
        ('6.3', 'Camada de Provisionamento e Operação', 'Cobrir desde preparação, desenvolvimento, aquisição, transição, utilização, arquivamento e destruição.'),
        ('6.5', 'Auditoria de Aplicação', 'Definir etapas da auditoria: iniciação, preparação, condução, relatório e acompanhamento.'),
        ('6.6', 'Papéis e Atores', 'Especificar papéis como Application Owner, Developer, Auditor, CISO, etc.'),
        ('7', 'Pacote de ASC', 'Agrupar ASCs relacionados em pacotes para facilitar distribuição e integridade.'),
    ]

    # Salvar requisitos
    def salvar_requisitos(norma, lista):
        for i, (codigo, titulo, descricao) in enumerate(lista, start=1):
            RequisitoNorma.objects.get_or_create(
                norma=norma,
                codigo=codigo,
                defaults={
                    'titulo': titulo,
                    'descricao': descricao,
                    'ordem': i
                }
            )

    salvar_requisitos(norma1, requisitos_27034_1)
    salvar_requisitos(norma2, requisitos_27034_3)
    salvar_requisitos(norma3, requisitos_27034_5)

    print("✅ Normas e requisitos carregados com sucesso!")
    print(f"   - {norma1}: {len(requisitos_27034_1)} requisitos")
    print(f"   - {norma2}: {len(requisitos_27034_3)} requisitos")
    print(f"   - {norma3}: {len(requisitos_27034_5)} requisitos")

if __name__ == '__main__':
    carregar_normas_e_requisitos()