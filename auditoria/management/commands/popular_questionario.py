from django.core.management.base import BaseCommand
from auditoria.models import Requisito
import re

# Dados extraídos do seu questionario.js
SECOES_COM_PERGUNTAS = [
    {
        "secao": "1.1 Estabelecendo o comitê do ONF",
        "descricao": """1) Quais evidências comprovam que os papéis e responsabilidades dos membros do Comitê do ONF foram formalmente definidos e documentados?
2) Que documentos demonstram que um candidato foi oficialmente nomeado para cada função do Comitê do ONF?
3) Há registros ou comunicados internos que provem que o Comitê do ONF foi oficialmente mandatado para estabelecer e manter o ONF dentro da organização?
4) Quais evidências mostram que o Comitê do ONF foi designado como responsável pela implementação, qualidade e uso do ONF na organização?
5) Que provas indicam que o Comitê do ONF recebeu os recursos necessários (financeiros, humanos, técnicos) para cumprir suas responsabilidades?"""
    },
    {
        "secao": "1.2 Projetando o ONF",
        "descricao": """1) Quais evidências demonstram que o escopo da iteração atual do processo de gestão do ONF foi formalmente definido e aprovado pela gestão responsável?
2) Existe documentação comprovando que o escopo aprovado foi devidamente comunicado a todos os atores e partes interessadas?
3) Quais registros mostram que os elementos do ONF definidos como “dentro do escopo” foram efetivamente projetados nesta iteração?
4) Há artefatos, minutas, diagramas ou documentos técnicos que comprovem o processo de design dos elementos do ONF nesta fase?
5) Quais provas indicam que os objetivos de segurança para a aplicação foram identificados e utilizados como base para o design dos elementos do ONF?"""
    },
    # Adicione mais seções aqui conforme necessário
]

class Command(BaseCommand):
    help = 'Popula o banco com perguntas individuais da ISO/IEC 27034'

    def handle(self, *args, **options):
        Requisito.objects.all().delete()
        total = 0

        for item in SECOES_COM_PERGUNTAS:
            secao = item["secao"]
            descricao = item["descricao"]
            # Divide em linhas do tipo "1) ...", "2) ...", etc.
            linhas = re.split(r'\n\d+\)', descricao)
            perguntas = [p.strip() for p in linhas if p.strip()]

            for pergunta in perguntas:
                pergunta_limpa = re.sub(r'^\d+\)\s*', '', pergunta)
                if pergunta_limpa:
                    Requisito.objects.create(
                        secao=secao,
                        pergunta_texto=pergunta_limpa,
                        fonte="ISO/IEC 27034"
                    )
                    total += 1

        self.stdout.write(
            self.style.SUCCESS(f'Sucesso! {total} perguntas individuais criadas.')
        )