// iso27034/questionario.js
const secoes = [
  { titulo: "Introdução", 
    descricao: `
A ISO/IEC 27034 é uma norma internacional que fornece um guia para integrar a segurança no ciclo de vida do desenvolvimento e operação de aplicações. 
Ela estabelece conceitos, princípios e um processo para incorporar a segurança em aplicativos desenvolvidos internamente, 
adquiridos de terceiros ou desenvolvidos sob terceirização. A norma ajuda as organizações a gerenciar os riscos de segurança de aplicações, estabelecer requisitos de segurança, 
selecionar controles e garantir a conformidade
`,
    obrigatorio: true, 
    camposExtras: [], 
    sub: [
      {titulo: "Estrutura da Norma",descricao: `
A ISO/IEC 27034 está dividida em várias partes, cada uma delas
abordando aspectos específicos de segurança de aplicações:

• Parte 1 – Visão geral e conceitos fundamentais  
• Parte 2 – Framework Normativo Organizacional (ONF) 
• Parte 3 – Processo de gerenciamento de segurança de aplicações 
• Parte 4 – Em construção:
• Parte 5 – Protocolos e estrutura de dados para ASCs
• Parte 6 – Estudos de Caso
• Parte 7 – Framework e estrutura de dados para ASCs

`,
        obrigatorio: true
      },
      {titulo: "Conceitos pricipais",descricao: `
Application Security Controls (ASCs): Controles para prevenir vulnerabilidades de segurança dentro de uma aplicação, como vincular variáveis em instruções SQL para prevenir injeção SQL Security Compass.
Organization Normative Framework (ONF): Coleção de documentos, políticas e recursos de segurança de aplicações que reflete a estratégia de segurança da organização de maneira estruturada CourseMonster. 
Funciona como um blueprint de segurança personalizável.
Níveis de Confiança: A norma introduz níveis de confiança, onde cada controle de segurança pode se enquadrar em um ou mais níveis, considerando que nem toda aplicação tem a mesma necessidade de controles de segurança Security Compass.

`,
        obrigatorio: true
      },
      {titulo: "Aplicabilidade",descricao: `
A norma é aplicável a aplicações desenvolvidas internamente, aplicações adquiridas de terceiros e situações onde o desenvolvimento ou operação da aplicação é terceirizado ISO.
O padrão introduz o modelo de Ciclo de Vida de Segurança de Aplicações, que ajuda organizações a abordar proativamente riscos de segurança em cada estágio PECB, desde o desenvolvimento até a implantação e manutenção.
`,
        obrigatorio: true
      },
      {titulo: "Benefícios",descricao: `
A ISO/IEC 27034 permite que organizações centralizem práticas de segurança, personalizem medidas conforme necessidades específicas e regulamentações, além de demonstrar conformidade com padrões internacionais, aumentando a credibilidade junto a clientes e partes interessadas. 
`,
        obrigatorio: true
      },
    ]
  },
  {titulo:"Parte 1: Visão geral e conceitos fundamentais",
    descricao:`
As organizações devem proteger suas informações e infraestruturas tecnológicas para se manterem em atividade.
Tradicionalmente, isso tem sido abordado no nível de TI, protegendo o perímetro e componentes da infraestrutura tecnológica, como computadores e redes, o que geralmente é insuficiente.

Além disso, as organizações estão cada vez mais se protegendo no nível de governança, operando sistemas de gestão de segurança da informação (SGSI) formalizados, testados e verificados. Uma abordagem sistemática contribui para um sistema de gestão de segurança da informação eficaz, conforme descrito na ISO/IEC 27001.
No entanto, as organizações enfrentam uma necessidade crescente de proteger suas informações no nível da aplicação.

As aplicações devem ser protegidas contra vulnerabilidades que podem ser inerentes à própria aplicação (por exemplo, defeitos de software), surgir durante o ciclo de vida da aplicação (por exemplo, por meio de alterações na aplicação) ou decorrem do uso da aplicação em um contexto para o qual ela não foi projetada.

Uma abordagem sistemática para aumentar a segurança das aplicações fornece evidências de que as informações usadas ou armazenadas pelas aplicações de uma organização estão adequadamente protegidas.
Os aplicativos podem ser adquiridos por meio de desenvolvimento interno, terceirização ou compra de um produto comercial.

Os aplicativos também podem ser adquiridos por meio de uma combinação dessas abordagens, o que pode introduzir novas
implicações de segurança que devem ser consideradas e gerenciadas.

Exemplos de aplicativos são sistemas de recursos humanos, sistemas financeiros, sistemas de processamento de texto, sistemas de gerenciamento de clientes, firewalls, sistemas antivírus e sistemas de detecção de intrusão.

Ao longo de seu ciclo de vida, um aplicativo seguro exibe características essenciais de qualidade de software, como
execução previsível e conformidade, além de atender aos requisitos de segurança sob a perspectiva de desenvolvimento,
gerenciamento, infraestrutura tecnológica e auditoria. Processos e
práticas de segurança aprimorada — e as pessoas qualificadas para executá-los — são necessários para construir aplicativos confiáveis ​​que não
aumentem a exposição ao risco além de um nível aceitável ou tolerável de risco residual e que suportem um SGSI eficaz.

Além disso, um aplicativo seguro leva em consideração os requisitos de segurança decorrentes do tipo de dados,
o ambiente alvo (contextos de negócios, regulatórios e tecnológicos), os atores e as
especificações do aplicativo. Deve ser possível obter evidências que demonstrem que um nível aceitável (ou tolerável) de risco residual foi atingido e está sendo mantido.
    
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      A norma ISO/IEC 27034 fornece orientações para auxiliar as organizações na integração da segurança aos processos utilizados para o gerenciamento de seus aplicativos.

Esta parte da ISO/IEC 27034 apresenta uma visão geral da segurança de aplicativos. Ela introduz definições, conceitos,
princípios e processos envolvidos na segurança de aplicativos.

A ISO/IEC 27034 é aplicável a aplicativos desenvolvidos internamente, aplicativos adquiridos de terceiros e
quando o desenvolvimento ou a operação do aplicativo é terceirizado.

INTRODUÇÃO

As organizações devem proteger suas informações e infraestruturas tecnológicas para se manterem em atividade. Tradicionalmente, isso tem sido abordado no nível de TI, protegendo o perímetro e componentes da infraestrutura tecnológica, como computadores e redes, o que geralmente é insuficiente.

Além disso, as organizações estão cada vez mais se protegendo no nível de governança, operando sistemas de gestão de segurança da informação (SGSI) formalizados, testados e verificados. Uma abordagem sistemática contribui para um sistema de gestão de segurança da informação eficaz, conforme descrito na ISO/IEC 27001. No entanto, as organizações enfrentam uma necessidade crescente de proteger suas informações no nível da aplicação.

As aplicações devem ser protegidas contra vulnerabilidades que podem ser inerentes à própria aplicação (por exemplo, defeitos de software), surgir durante o ciclo de vida da aplicação (por exemplo, por meio de alterações na aplicação) ou decorrem do uso da aplicação em um contexto para o qual ela não foi projetada.

Uma abordagem sistemática para aumentar a segurança das aplicações fornece evidências de que as informações usadas ou armazenadas pelas aplicações de uma organização estão adequadamente protegidas. Os aplicativos podem ser adquiridos por meio de desenvolvimento interno, terceirização ou compra de um produto comercial.

Os aplicativos também podem ser adquiridos por meio de uma combinação dessas abordagens, o que pode introduzir novas implicações de segurança que devem ser consideradas e gerenciadas.

Exemplos de aplicações incluem sistemas de recursos humanos, sistemas financeiros, sistemas de processamento de texto, sistemas de gestão de clientes, firewalls, sistemas antivírus e sistemas de detecção de intrusão.

Ao longo de seu ciclo de vida, uma aplicação segura exibe características essenciais de qualidade de software, como execução previsível e conformidade, além de atender aos requisitos de segurança sob as perspectivas de desenvolvimento, gestão, infraestrutura tecnológica e auditoria. Processos e práticas de segurança aprimoradas — e as pessoas qualificadas para executá-los — são necessários para construir aplicações confiáveis ​​que não aumentem a exposição ao risco além de um nível aceitável ou tolerável de risco residual e que suportem um SGSI (Sistema de Gestão de Segurança da Informação) eficaz.

Além disso, uma aplicação segura leva em consideração os requisitos de segurança decorrentes do tipo de dados, do ambiente alvo (contextos de negócios, regulatórios e tecnológicos), dos atores e das especificações da aplicação. Deve ser possível obter evidências que demonstrem que um nível aceitável (ou tolerável) de risco residual foi atingido e está sendo mantido.
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", 
      descricao:`
      A ISO/IEC 27034 é uma norma que orienta como inserir segurança em todo o ciclo de vida de desenvolvimento de aplicações.

Ela ajuda as organizações a:

definir requisitos de segurança, avaliar riscos e escolher controles adequados;

garantir segurança mesmo com terceirização ou compra de software de terceiros;

gerar evidências de que suas aplicações são seguras;

alinhar o desenvolvimento com outras normas de segurança, como ISO 27001 e ISO 27002.

Ela não ensina a programar com segurança, não define como desenvolver software e não substitui processos de desenvolvimento.
Em vez disso, deve ser integrada aos processos já existentes da organização, que precisam ser mapeados para atender à norma.
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", 
      descricao:`
Público-alvo geral
A norma é útil para diversos papéis dentro de uma organização, incluindo:
    • gestores,
    • equipes de provisão e operação,
    • profissionais de aquisição,
    • fornecedores,
    • auditores.

Gestores
São responsáveis por toda a gestão da aplicação ao longo do ciclo de vida.
Eles precisam:
    • equilibrar custos de segurança com riscos e valor para a organização,
    • analisar relatórios de auditoria,
    • garantir conformidade legal e normativa,
    • supervisionar a implementação de segurança,
    • autorizar o nível de confiança da aplicação,
    • definir controles de segurança e testes necessários,
    • reduzir custos de verificação,
    • documentar políticas e procedimentos,
    • treinar os envolvidos,
    • manter atualizações sobre segurança dos sistemas.

Equipes de provisão e operação
Incluem arquitetos, analistas, programadores, testers, administradores de sistemas, banco de dados e redes.
Eles precisam:
    • saber quais controles aplicar em cada fase do ciclo de vida,
    • implementar esses controles no software,
    • minimizar impacto nos processos de desenvolvimento e testes,
    • garantir que controles atendam às medições relacionadas,
    • usar ferramentas e boas práticas,
    • facilitar revisões técnicas,
    • apoiar processos de aquisição,
    • cuidar do descarte adequado de itens remanescentes.

Adquirentes
Pessoas que compram produtos ou serviços.
Precisam:
    • preparar solicitações com requisitos de segurança,
    • escolher fornecedores que atendam a esses requisitos,
    • verificar evidências de controles adotados,
    • avaliar produtos com base nessas evidências.

Fornecedores
Aqueles que entregam produtos ou serviços.
Precisam:
    • cumprir requisitos de segurança das propostas,
    • escolher controles adequados considerando custos,
    • comprovar que implementaram corretamente esses controles.

Auditores
Profissionais que verificam segurança.
Precisam:
      • entender o escopo e procedimentos das medições de verificação,
      • garantir repetibilidade dos resultados,
      • definir quais medições comprovam o nível de confiança exigido,
      • usar processos auditáveis e baseados em evidências.

      
      `, obrigatorio: true,
    },
    {titulo:"2. Referências normativas", 
      descricao: `
      Os seguintes documentos, no todo ou em parte, são referenciados normativamente neste documento e são indispensáveis ​​para a sua aplicação. Para referências datadas, aplica-se somente a edição citada. Para referências não datadas, aplica-se a edição mais recente do documento referenciado (incluindo quaisquer emendas).
      ISO/IEC 27000:2009, Tecnologia da informação — Técnicas de segurança — Sistemas de gestão da segurança da informação — Visão geral e vocabulário
      ISO/IEC 27001:2005, Tecnologia da informação — Técnicas de segurança — Sistemas de gestão da segurança da informação — Requisitos
      ISO/IEC 27002:2005, Tecnologia da informação — Técnicas de segurança — Código de prática para gestão da segurança da informação
      ISO/IEC 27005:2011, Tecnologia da informação — Técnicas de segurança — Gestão de riscos de segurança da informação
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", 
      descricao:`
For the purposes of this document, the terms and definitions given in ISO/IEC 27000, ISO/IEC 27001, 
ISO/IEC 27002, ISO/IEC 27005 and the following apply. 

3.1
Ator
Pessoa ou processo que executa uma atividade durante o ciclo de vida de uma aplicação ou inicia a interação com qualquer processo fornecido por ou impactado por uma aplicação.

3.2
Nível de Confiança Real
Resultado de um processo de auditoria que fornece evidências que comprovam que todos os Controles de Segurança da Aplicação exigidos pelo
Nível de Confiança Alvo da aplicação foram implementados e verificados corretamente e produziram os resultados esperados.

3.3
Aplicação
Solução de TI, incluindo software de aplicação, dados de aplicação e procedimentos, projetada para ajudar os usuários de uma organização a executar tarefas específicas ou lidar com tipos específicos de problemas de TI, automatizando um processo ou função de negócios.

NOTA: Processos de negócios incluem pessoas e tecnologias.

3.4
Modelo de Referência do Ciclo de Vida de Segurança de Aplicações
Modelo de ciclo de vida usado como referência para a introdução de atividades de segurança em processos envolvidos em gerenciamento de aplicações, provisionamento e operação de aplicações, gerenciamento de infraestrutura e auditoria de aplicações.

3.5
Estrutura Normativa de Aplicações (ANF)
Conjunto de elementos normativos relevantes para um projeto de aplicação específico, selecionados da Estrutura Normativa da Organização.

3.6
Proprietário da aplicação
Função organizacional responsável pelo gerenciamento, utilização e proteção da aplicação e seus dados.

NOTA 1: O proprietário da aplicação toma todas as decisões relativas à segurança da aplicação.
NOTA 2: O termo “proprietário” é usado nesta parte da ISO/IEC 27034 como sinônimo de “proprietário da aplicação”. 

3.7
Projeto de aplicação
Esforço com critérios de início e término definidos, realizado para adquirir uma aplicação de acordo com recursos e requisitos especificados.

[FONTE: ISO/IEC 12207:2008, definição 4.29, modificada – especializada para escopo de aplicação.]
NOTA: Para os fins da ISO/IEC 27034, os critérios de início e término são tais que todo o ciclo de vida da aplicação está incluído no projeto de aplicação.

3.8
Controle de Segurança de Aplicativos ASC estrutura de dados contendo uma enumeração e descrição precisas de uma atividade de segurança e sua respectiva
medição de verificação a ser realizada em um ponto específico do ciclo de vida de um aplicativo

3.9
Processo de Gerenciamento de Segurança de Aplicativos
ASMP
processo geral de gerenciamento para atividades de segurança, atores, artefatos e auditoria para cada aplicativo usado por uma
organização

3.10
software de aplicativo
software projetado para ajudar os usuários a executar tarefas específicas ou lidar com tipos específicos de problemas, diferentemente
do software que controla o próprio computador
[FONTE: ISO/IEC/IEEE 24765:2010, definição 3.130-1]
© ISO/IEC 2011 – Todos os direitos reservados

3.11
auditoria
processo sistemático e documentado para obter evidências e avaliá-las objetivamente para determinar a 3.11
Extensão em que os critérios de medição foram atendidos
[FONTE: ISO 9000:2005, definição 3.9.1, modificada – generalizada.]

3.12
ambiente
contexto empresarial, regulatório e tecnológico em que uma aplicação é utilizada, incluindo todos os processos, produtos, informações e atores envolvidos na aplicação

3.13
ciclo de vida
evolução de um sistema, produto, serviço, projeto ou outra entidade criada pelo homem, desde a concepção até a desativação

[FONTE: ISO/IEC 12207:2008, definição 4.16]

3.14
modelo de ciclo de vida
estrutura de processos e atividades relacionados ao ciclo de vida que pode ser organizada em estágios, que também serve como referência comum para comunicação e entendimento

[FONTE: ISO/IEC 12207:2008, definição 4.17]

3.15
manutenção
qualquer alteração realizada em uma aplicação após sua entrega
EXEMPLOS: Correção de erros, funcionalidades adicionadas, desempenho aprimorado, garantia da funcionalidade da aplicação.

3.16
Estrutura Normativa da Organização (ONF)
estrutura interna de toda a organização contendo um conjunto de processos e elementos normativos de segurança de aplicações

3.17
Comitê da ONF
função organizacional responsável por manter e aprovar componentes relacionados à segurança de aplicações dentro da
ONF

3.18
ambiente operacional
contexto externo de um programa existente ou que se espera que exista durante sua execução

[FONTE: ISO/IEC 2382-7:2000, definição 07.11.07]

3.19
produto
resultado de um processo

[FONTE: ISO 9000:2005, definição 3.4.2]

3.20
aplicação segura
aplicação para a qual o Nível de Confiança Atual é igual ao Nível de Confiança Alvo, conforme definido pela organização que utiliza a aplicação

3.21
Nível de Confiança Alvo
nome ou rótulo de um conjunto de Controles de Segurança de Aplicativos considerados necessários pelo proprietário do aplicativo para reduzir
o risco associado a um aplicativo específico a um nível aceitável (ou tolerável), após uma análise de risco de segurança do aplicativo.

3.22
usuário
pessoa que usa ou opera algo

[FONTE: Concise Oxford English Dictionary]

NOTA: Para os fins da ISO/IEC 27034, o termo “usuário” inclui não apenas o usuário final, mas também funções de manutenção e operação, como administrador de sistema e administrador de banco de dados.

3.23
validação
confirmação, por meio do fornecimento de evidências objetivas, de que os requisitos para um uso ou aplicação específica pretendida foram atendidos
NOTA 1: O termo “validado” é usado para designar o status correspondente.
NOTA 2: As condições de uso para validação podem ser reais ou simuladas.

[FONTE: ISO 9000:2005, definição 3.8.5]
NOTA 3: Em termos leigos, “validação” significa “A aplicação correta está sendo construída?”
3.24
Verificação
Confirmação, por meio do fornecimento de evidências objetivas, de que os requisitos especificados foram atendidos.
NOTA 1: O termo “verificado” é usado para designar o status correspondente.
NOTA 2: A confirmação pode incluir atividades como a realização de cálculos alternativos, a comparação de uma nova especificação de projeto com uma especificação de projeto similar comprovada, a realização de testes e demonstrações e a revisão de documentos antes da emissão.

[FONTE: ISO 9000:2005, definição 3.8.4]

NOTA 3: Em termos leigos, “verificação” significa “O aplicativo está sendo construído corretamente?”
      
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", 
      descricao:`
ANF: Application Normative Framework  (Estrutura Normativa de Aplicação)

ASC: Application Security Control  (Controle de Segurança de Aplicação)

ASMP: Application Security Management Process (Processo de Gerenciamento de Segurança de Aplicação) 

COTS: Commercial-Off-The-Shelf (Produtos Comerciais Prontos para Uso)

ICT: Information and Communication Technology  (Tecnologia da Informação e Comunicação)

ISMS: Information Security Management System  (Sistema de Gerenciamento de Segurança da Informação)

ONF: Organization Normative Framework  (Estrutura Normativa Organizacional)

XML: eXtended Markup Language (Linguagem de Marcação Estendida)
      `,
    obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", 
      descricao:`
      A norma ISO/IEC 27034 é composta por seis documentos ou partes. Esta parte da ISO/IEC 27034 apresenta uma visão geral e os conceitos necessários. 
Ela é autossuficiente e suficiente para avaliar a necessidade de implementação da ISO/IEC 27034 em uma organização, bem como para fins de apresentação e treinamento. 
Esta parte da ISO/IEC 27034, por si só, não é suficiente para a implementação da ISO/IEC 27034.

As normas ISO/IEC 27034-2, -3 e -4 devem ser adquiridas por organizações que desejam implementar a ISO/IEC 27034. 
Elas contêm discussões aprofundadas, enumerações, estruturas e descrições para todos os conceitos apresentados nesta parte da ISO/IEC 27034.

A ISO/IEC 27034-5 será especialmente útil para organizações interessadas em adquirir ou distribuir controles,
por fornecer uma estrutura de dados padrão e um protocolo padrão para a distribuição de controles. Por exemplo, uma
grande organização pode estar interessada na distribuição e atualização automatizadas de controles para todas as suas subunidades. 

A norma ISO/IEC 27034-6 fornece exemplos de controles para requisitos específicos de segurança de aplicações e será útil para organizações que desejam implementar a ISO/IEC 27034 ou para organizações que desejam desenvolver controles específicos.
O conteúdo das seis partes é o seguinte:

PARTE 1 – Visão geral e conceitos (VOCÊ ESTÁ AQUI)
A Parte 1 apresenta uma visão geral da segurança de aplicações. Ela introduz definições, conceitos, princípios
e processos envolvidos na segurança de aplicações.

PARTE 2 – Estrutura normativa da organização
A Parte 2 apresenta uma discussão aprofundada da Estrutura Normativa da Organização, seus componentes
e os processos de nível organizacional para gerenciá-la. Esta parte explica as relações entre
esses processos, as atividades associadas a eles e os meios pelos quais eles apoiam o
Processo de Gerenciamento de Segurança de Aplicações. Esta parte discutirá como uma organização deve
implementar a ISO/IEC 27034 e integrá-la aos seus processos existentes.

PARTE 3 – Processo de gerenciamento de segurança de aplicações
A Parte 3 apresenta uma discussão aprofundada dos processos envolvidos em um projeto de aplicação:
determinação dos requisitos e ambiente da aplicação, avaliação dos riscos de segurança da aplicação,
criação e manutenção da Estrutura Normativa da Aplicação, implementação e operação da
aplicação e validação de sua segurança ao longo de seu ciclo de vida. Explica as relações entre esses processos, suas atividades e interdependências, e como eles introduzem a segurança em um projeto de aplicação.

PARTE 4 – Validação de segurança da aplicação
A Parte 4 apresenta uma discussão aprofundada do processo de validação e certificação de segurança da aplicação, que mede o Nível de Confiança Atual da aplicação e o compara com o Nível de Confiança Alvo previamente selecionado pela organização.

PARTE 5 – Protocolos e estrutura de dados de controle de segurança da aplicação
A Parte 5 apresenta os protocolos e o esquema XML para o Controle de Segurança da Aplicação (ASC) baseado na série ISO/IEC TS 15000: Electronic business eXtensible Markup Language (ebXML). Ele será usado para ajudar as organizações a validar a estrutura de dados de seus ASCs e outros componentes da ISO/IEC 27034, e para ajudar a automatizar a distribuição, atualização e uso dos ASCs.

PARTE 6 – Orientações de segurança para aplicações específicas
A Parte 6, se necessário, poderá fornecer exemplos de ASCs adaptados para requisitos de segurança de aplicações específicas.
      `,
      obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 2: Framework normativo da organização",
    descricao:`
    O framework normativo de uma organização é a soma de todos os regulamentos, políticas, práticas, papéis e ferramentas utilizados pela organização. Toda organização já deve possuir um framework normativo, mais ou menos formalmente documentado.
O Conceito de Framework Normativo da Organização (ONF) descrito nesta Norma Internacional é um framework abrangente, em nível organizacional, que contém um subconjunto dos processos e componentes da organização que são relevantes para a segurança de aplicações e que são normativos dentro da organização.
Embora um ONF informal seja um primeiro passo para garantir a segurança das aplicações da organização, esta Norma Internacional recomenda um ONF formalizado e padronizado, conforme descrito neste documento.
    
A finalidade de implementar o ONF é:

a) atribuir responsabilidade pela segurança das aplicações e estabelecer um processo que possa evoluir para melhorar a visibilidade da segurança das aplicações;
b) garantir que todos os elementos (componentes, papéis e processos) envolvidos na segurança de aplicações sejam aprovados pelos tomadores de decisão apropriados e aceitos por todos os atores e partes interessadas relevantes;
c) minimizar a resistência a mudanças trazidas por esses novos elementos de segurança de aplicações;
d) padronizar os elementos de segurança de aplicações para garantir uma implementação e verificação uniformes em toda a organização;
e) ajudar a organização a melhorar seu nível de maturidade (conforme definido na ISO/IEC 15504 e outros padrões como SEI/CMMI), formalizando e revisando todos os elementos de segurança de aplicações para mantê-los atualizados com o ambiente em evolução da organização; e
f) estabelecer mecanismos para garantir que um nível adequado de segurança possa ser alcançado de maneira econômica, por exemplo, reutilizando elementos de segurança de aplicações já aprovados.

Princípios:

As organizações que criam e mantêm os componentes e processos no ONF devem ser guiadas pelos seguintes princípios:

a) o conteúdo do ONF deve ser adaptado às necessidades de negócio da organização;
b) qualquer elemento definido no ONF deve ser aprovado pelo comitê do ONF;
c) o conteúdo do ONF deve estar disponível e ser comunicado em toda a organização;
d) como o contexto de ameaças muda continuamente e sem aviso, a organização deve estar preparada para revisar o ONF em resposta a essas mudanças; e
e) o ONF deve ser auditável.
`,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Processo de Gestão do ONF", 
      descricao: `
      A organização deve estabelecer, implementar, manter e melhorar um processo, em nível organizacional, para a gestão do seu ONF.

O Processo de Gerenciamento do ONF é composto por seis subprocessos.
Quatro deles são adaptados dos processos "Planejar, Fazer, Verificar, Agir" (PDCA) do modelo geral PDCA, e são ajustados para o desenvolvimento e implementação de elementos de segurança de aplicações dentro do ONF.
O diagrama a seguir mostra como os subprocessos de gerenciamento do ONF se relacionam com as quatro etapas do modelo PDCA e com os processos do sistema de gestão de segurança da informação.
      
        plan ->   panejamento             ->    Projetando o ONF
        do   ->   Suporte/operação        ->    Implementando o ONF
        check->   Avaliação de desempenho ->    Monitoramento e revisão do ONF
        Act  ->   Melhoria                ->    Melhorando o ONF



      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Estabelecendo o comitê do ONF", descricao:`
      O objetivo deste processo é estabelecer um comitê ONF com a autoridade e os recursos necessários para o desenvolvimento, implementação e evolução do ONF, além de demonstrar o comprometimento da gestão responsável.
      Como resultado da realização bem-sucedida deste processo:

a) os papéis e responsabilidades dos membros do Comitê ONF são definidos;
b) um candidato é nomeado para cada papel;
c) o comitê ONF é oficialmente mandatado a estabelecer e manter o ONF, e isso é comunicado dentro da organização;
d) o comitê ONF é responsabilizado pela implementação, qualidade e utilização do ONF na organização;
e) o comitê ONF recebe os recursos necessários para assumir suas responsabilidades.

1)Quais evidências comprovam que os papéis e responsabilidades dos membros do Comitê do ONF foram formalmente definidos e documentados?
2)Que documentos demonstram que um candidato foi oficialmente nomeado para cada função do Comitê do ONF?
3)Há registros ou comunicados internos que provem que o Comitê do ONF foi oficialmente mandatado para estabelecer e manter o ONF dentro da organização?
4)Quais evidências mostram que o Comitê do ONF foi designado como responsável pela implementação, qualidade e uso do ONF na organização?
5)Que provas indicam que o Comitê do ONF recebeu os recursos necessários (financeiros, humanos, técnicos) para cumprir suas responsabilidades?
      `, obrigatorio: true
    },
    {titulo:"1.2 PProjetando o ONF", descricao:`
      O objetivo deste processo é determinar metas para a segurança de aplicações, definir quais elementos devem ser implementados no ONF na iteração atual do processo de gerenciamento do ONF e projetar esses elementos.
      a) o escopo da iteração atual do processo de gerenciamento do ONF é definido, aprovado pela administração responsável apropriada e comunicado; e
      b) os elementos do ONF que estão dentro do escopo são projetados.

1) Quais evidências demonstram que o escopo da iteração atual do processo de gestão do ONF foi formalmente definido e aprovado pela gestão responsável?
2) Existe documentação comprovando que o escopo aprovado foi devidamente comunicado a todos os atores e partes interessadas?
3) Quais registros mostram que os elementos do ONF definidos como “dentro do escopo” foram efetivamente projetados nesta iteração?
4) Há artefatos, minutas, diagramas ou documentos técnicos que comprovem o processo de design dos elementos do ONF nesta fase?
5) Quais provas indicam que os objetivos de segurança para a aplicação foram identificados e utilizados como base para o design dos elementos do ONF?
      `, obrigatorio: true,

    },
    {titulo:"1.3 Implementando o ONF", descricao: `
      A finalidade desse processo é implementar os elementos do ONF que foram projetados na iteração atual do processo de gerenciamento do ONF, fornecer soluções de segurança de aplicações, como componentes e processos, e distribuí-los para serem usados em toda a organização como diretrizes, serviços ou práticas obrigatórias de segurança de aplicações.
      Como resultado da execução bem-sucedida desse processo:
os elementos do ONF são desenvolvidos e implementados; e
treinamento é fornecido aos atores relevantes para o uso dos elementos implementados do ONF.

1) Quais evidências comprovam que os elementos do ONF projetados nesta iteração foram efetivamente desenvolvidos e implementados?
2) Há registros ou documentos que demonstrem que os componentes, processos ou diretrizes de segurança da aplicação foram distribuídos e disponibilizados para toda a organização?
3) Existem provas de que treinamentos foram realizados para os atores relevantes sobre o uso dos elementos implementados do ONF?
4) Quais evidências mostram que as soluções de segurança (componentes, processos, práticas obrigatórias) fornecidas pelo ONF foram incorporadas às operações da organização?
5) Há documentos de acompanhamento que comprovem que os elementos implementados do ONF estão sendo utilizados conforme previsto nas diretrizes de segurança da aplicação?
      `,obrigatorio: true,
    },
    {titulo:"1.4 Monitoramento e revisão do ONF", descricao:`
      A finalidade deste processo é revisar os componentes e processos do ONF para garantir que permaneçam adequados ao seu propósito e sejam utilizados em conformidade com a política de segurança de aplicações da organização.
      Como resultado da execução bem-sucedida deste processo:
a) informações documentadas são registradas como evidência dos resultados das revisões; e
b) as melhorias necessárias nos elementos do ONF são identificadas e registradas.

1) Quais evidências documentadas demonstram que os componentes e processos do ONF foram revisados para garantir que continuam adequados ao seu propósito?
2) Há registros formais mostrando que as revisões do ONF foram conduzidas em conformidade com a política de segurança de aplicações da organização?
3) Quais documentos comprovam que melhorias necessárias nos elementos do ONF foram identificadas durante o processo de revisão?
4) Existe evidência de que os resultados das revisões do ONF foram devidamente registrados e arquivados de acordo com os requisitos de governança da organização?
5) Quais provas mostram que o ONF está sendo utilizado corretamente pelos responsáveis, conforme previsto nas políticas e processos de segurança de aplicações?
      
      `, obrigatorio: true,
    },
    {titulo:"1.5 Melhorando o ONF", descricao:`
      A finalidade deste processo é:
a) melhorar a usabilidade, adequação, pertinência e eficácia do ONF;
b) adicionar elementos ausentes exigidos por mudanças no ambiente da organização; e
c) manter o ONF alinhado com o sistema de gestão de segurança da informação da organização.

  Como resultado da execução bem-sucedida deste processo:
a) elementos do ONF são aprimorados;
b) necessidades de redesenhar elementos do ONF ou projetar novos elementos do ONF são documentadas; e
c) alterações nos elementos do ONF são registradas, devidamente documentadas e comunicadas.

1) Apresente evidências das melhorias feitas nos elementos do ONF, demonstrando quais partes foram revisadas e como se tornaram mais eficazes ou adequadas.
2) Forneça registros que comprovem a identificação de necessidades de redesign ou criação de novos elementos do ONF, incluindo justificativas e impactos esperados.
3) Mostre documentos oficiais ou relatórios internos que registrem as mudanças realizadas nos elementos do ONF, garantindo que foram formalmente documentadas e aprovadas.
4) Apresente provas de comunicação interna demonstrando que as alterações no ONF foram devidamente comunicadas aos atores relevantes da organização.
5) Forneça evidências de que as atualizações do ONF estão alinhadas com o Sistema de Gestão de Segurança da Informação (SGSI) da organização, incluindo avaliações, relatórios de conformidade ou comparativos antes/depois.
      `,obrigatorio: true,
    },
    {titulo:"1.6 Auditando o ONF", descricao:`
      A finalidade deste processo é medir a conformidade do ONF com os requisitos de segurança de aplicações da organização, particularmente com a política de gerenciamento de segurança de aplicações da organização.
Ele é especialmente útil para organizações que precisam garantir que seu ONF esteja em conformidade com os requisitos de outro ONF, por exemplo, o ONF de uma organização matriz ou de um órgão regulador.

EXEMPLO
Um governo pode implementar um ONF com requisitos mínimos para todas as agências governamentais.
O ONF de uma agência teria então que estar em conformidade com o ONF do governo, ou seja, teria que implementar ao menos os requisitos do ONF governamental. Essa conformidade pode ser verificada durante uma auditoria do ONF da agência.

Como resultado da execução bem-sucedida deste processo:
a) um programa de auditoria do ONF é implementado e gerenciado;
b) os elementos do ONF são auditados de acordo com o programa;
c) os resultados da auditoria são devidamente documentados e comunicados;
d) os resultados da auditoria são usados para a melhoria contínua do ONF.  

1) Existe um documento formal contendo as especificações da aplicação?
2) As especificações de segurança foram revisadas e aprovadas por responsáveis autorizados?
3) Há evidências de que os requisitos de segurança da aplicação foram derivados dos riscos identificados?
4) As especificações técnicas da aplicação são mantidas atualizadas conforme mudanças no sistema?
5)Existe integração entre as especificações de segurança e o ciclo de desenvolvimento da aplicação (SDLC)?


      `,obrigatorio: true,
    },
    {titulo:"2.Elementos do ONF ", descricao:`
      O ONF fornece elementos, como componentes e processos, para atender às necessidades de segurança de aplicações da organização.
      `,obrigatorio: true,
    },
    {titulo:" 2.2 Componente de contexto de negócio", descricao:`
      Este componente ajuda a identificar riscos e requisitos de segurança provenientes das atividades de negócio da organização e fornece valores a serem referenciados no atributo “Requisitos atendidos” dos ASCs. Ele introduz uma abordagem padrão aprovada para mitigar riscos associados ao domínio de negócios da organização.
      O contexto de negócio é um inventário e documentação de todos os processos de negócio, normas e melhores práticas adotadas pela organização que podem ter impacto em projetos de aplicação. Tais atividades geram riscos, e a organização deve determinar requisitos de segurança para mitigar esses riscos. ASCs devem ser implementados para atender a esses requisitos. Os construtores de ASCs precisam indicar por que um ASC está sendo fornecido, ou seja, qual requisito de segurança o ASC implementa. Eles encontrarão as informações necessárias no componente de contexto de negócio do ONF.

EXEMPLO 1
A política de segurança da organização é tipicamente uma fonte direta de requisitos de segurança. Alguns deles são relevantes para segurança de aplicações. A não conformidade com a política de segurança é um risco que o proprietário da aplicação geralmente não tolera. ASCs podem ser projetados para satisfazer requisitos específicos da política de segurança.

EXEMPLO 2
Um processo de negócio para construir aeronaves no domínio da indústria aeronáutica trará um alto nível de risco e, consequentemente, numerosos requisitos de segurança. Como resultado, diversos ASCs normalmente serão adicionados às aplicações associadas a esse processo.

1) Quais evidências a organização pode apresentar para demonstrar que mantém um inventário atualizado de processos de negócio, normas e melhores práticas que impactam seus projetos de aplicação?
2) Que provas demonstram que os riscos identificados nos processos de negócio foram analisados e convertidos em requisitos de segurança formais?
3) Quais evidências mostram que cada ASC implementado está devidamente associado a um requisito de segurança documentado no business context?
4) Que documentação comprova que os responsáveis pela construção de ASCs utilizaram informações do business context para justificar a criação ou adoção dos controles?
5)Quais provas demonstram que a política de segurança da organização foi revisada, aprovada e incorporada ao business context como fonte de requisitos de segurança para aplicações?
      `,obrigatorio: true,
    },
    {titulo:" 2.3 Componente de contexto de negócio", descricao:`
      Este componente ajuda a determinar riscos de segurança provenientes do contexto regulatório da organização; mais especificamente, os riscos decorrentes do não cumprimento das leis e regulamentações relevantes pela organização.
Ele fornece valores a serem referenciados no atributo “Requisitos atendidos” dos ASCs.
Também introduz uma abordagem padrão aprovada para mitigar riscos associados a cada lei ou regulamentação relevante.

O contexto regulatório é um inventário e documentação de leis e regulamentos que podem ter impacto em projetos de aplicações, em qualquer localização de negócios da organização, ou seja, em países ou jurisdições onde a aplicação é desenvolvida, implantada ou utilizada.
Esse inventário será especialmente útil para determinar quais leis e regulamentações são relevantes para quais especificações de aplicação associadas a quais atividades de negócios.
Informações adicionais devem ser incluídas no inventário para esse propósito.
      
1) Quais evidências demonstram que a organização mantém um inventário atualizado das leis e regulações aplicáveis aos projetos de aplicação?
2) Que provas podem ser apresentadas para confirmar que cada aplicação possui requisitos de segurança derivados das leis e regulações relevantes identificadas no inventário regulatório?
3) Existem registros mostrando que falhas de conformidade regulatória foram avaliadas como riscos? Quais documentos comprovam essa análise?
4) Quais evidências comprovam que os ASCs foram mapeados diretamente para requisitos regulatórios específicos, conforme exigido pelo Regulatory Context Component?
5) Que provas demonstram que a organização revisa periodicamente o contexto regulatório para cada país, jurisdição ou local onde a aplicação é desenvolvida, implantada ou utilizada?
`,obrigatorio: true,
    },
    {titulo:" 2.4 Componente de contexto tecnológico", descricao:`
      Este componente ajuda a determinar riscos de segurança provenientes da infraestrutura tecnológica da organização. Ele fornece valores a serem referenciados no atributo “Requisitos atendidos” dos ASCs. Também fornece informações sobre quais componentes de TI podem ser usados para dar suporte aos ASCs que exigem esse suporte.
      O contexto tecnológico é uma documentação dos componentes de TI da organização (por exemplo, componentes físicos, aplicações, serviços) e das próprias melhores práticas e regras da organização que se aplicam ao uso desses componentes.

1) Quais evidências demonstram que a organização mantém uma documentação atualizada de todos os componentes de TI (hardware, software e serviços) utilizados nos projetos de aplicação?
2) Quais provas mostram que as boas práticas e regras internas de uso de componentes tecnológicos estão formalizadas e são seguidas nos projetos de aplicação?
3) Existe alguma evidência de que os riscos tecnológicos associados aos componentes de TI foram identificados e que os requisitos de segurança correspondentes foram incorporados aos ASCs? Forneça essa documentação.
4) Quais evidências existem de que os componentes de TI usados pela organização (servidores, aplicações, serviços) estão documentados e atualizados, conforme exigido pelo contexto tecnológico?
5) Quais provas a organização pode apresentar demonstrando que segue suas próprias regras e melhores práticas internas para uso e manutenção dos componentes de TI listados no contexto tecnológico?


      `,obrigatorio: true,
    },
    {titulo:" 2.5 Repositório de especificações de aplicações", descricao:`
      Este componente ajuda a determinar riscos de segurança provenientes das especificações das aplicações da organização e a mitigar o risco de implementar e/ou utilizar incorretamente essas especificações. Ele fornece valores a serem referenciados no atributo “Requisitos atendidos” dos ASCs.
      O repositório de especificações de aplicações é uma documentação dos requisitos funcionais gerais de TI da organização e das soluções pré-aprovadas correspondentes. Ele deve incluir todas as especificações, funcionalidades e serviços incluídos ou oferecidos pelas aplicações da organização, incluindo documentos e boas práticas para implementá-los, utilizá-los e verificá-los.
Soluções pré-aprovadas são frequentemente processos, produtos ou bibliotecas de código que a organização torna recomendação ou prática obrigatória por meio de regras, políticas ou arquitetura corporativa dentro de um ambiente específico. Tais soluções são tipicamente maduras e continuamente aprimoradas. A vantagem de associar ASCs a soluções que estão em constante reutilização é evidente.

1) Apresente evidências de que os requisitos funcionais gerais de TI da organização estão documentados e armazenados no repositório de especificações de aplicações.
2) Forneça provas de que as soluções pré-aprovadas (processos, produtos ou bibliotecas) utilizadas nos projetos seguem regras, políticas ou padrões definidos pela organização.
3) Demonstre evidências de que as equipes de desenvolvimento utilizam as práticas recomendadas documentadas no repositório para implementar, usar e validar funcionalidades das aplicações.
4) Apresente documentação que comprove a revisão periódica e melhoria contínua das soluções pré-aprovadas mantidas no repositório.
5) Forneça evidências de que os riscos relacionados à implementação incorreta ou uso inadequado das especificações de aplicações são mitigados por meio da referência ao repositório durante o desenvolvimento.

      `,obrigatorio: true,
    },
    {titulo:" 2.6 Repositório de papéis, responsabilidades e qualificações", descricao:`
      Este componente ajuda a determinar riscos de segurança provenientes das pessoas envolvidas com as aplicações da organização. Ele também ajuda a garantir que todos os papéis críticos para todos os processos estejam preenchidos, que todas as responsabilidades estejam definidas, que conflitos de interesse sejam evitados e que as pessoas designadas aos papéis tenham qualificações profissionais suficientes.
      O repositório de papéis, responsabilidades e qualificações é uma documentação dos papéis, responsabilidades e qualificações dos atores envolvidos com as aplicações da organização.

1) Quais evidências comprovam que todos os papéis críticos relacionados às aplicações foram formalmente designados e documentados?
2) Que registros demonstram que as responsabilidades atribuídas a cada papel estão claramente definidas e atualizadas?
3) Quais provas mostram que não há conflitos de interesse entre os papéis envolvidos nos processos de desenvolvimento, operação e segurança das aplicações?
4) Quais documentos demonstram que as pessoas alocadas aos papéis possuem as qualificações profissionais necessárias (ex.: certificações, treinamentos, histórico profissional)?
5) Que evidências comprovam que existe um repositório atualizado contendo os papéis, responsabilidades e qualificações das equipes que atuam com as aplicações da organização?

      `,obrigatorio: true,
    },
    {titulo:" 2.7 Biblioteca de ASC da Organização", descricao:`
      O componente da Biblioteca de ASC é usado por uma organização para organizar os ASCs de acordo com os níveis de confiança aos quais eles se aplicam, para comunicar os ASCs com facilidade e para selecionar os ASCs apropriados durante um projeto de aplicação.
      A Biblioteca de ASC é o repositório dos ASCs disponíveis na organização. Cada ASC nesse repositório está associado a um ou vários nível(is) de confiança.
      ASC Application Security Control - Controle de Segurança de Aplicação

1) Quais evidências demonstram que todos os ASCs da organização foram devidamente organizados na Biblioteca de ASCs de acordo com seus níveis de confiança?
2) Que registros comprovam que os ASCs foram comunicados de forma eficiente aos membros da equipe e partes interessadas?
3) Existem documentos que provem que a Biblioteca de ASCs foi utilizada para selecionar ASCs apropriados durante projetos de aplicação?
4) Quais provas indicam que cada ASC está corretamente associado a um ou mais níveis de confiança no repositório?
5) Há registros de auditorias ou revisões que confirmem a atualização contínua da Biblioteca de ASCs, refletindo novos ASCs ou alterações nos níveis de confiança?

      `,obrigatorio: true,
    },
    {titulo:" 2.8 Controle de Segurança da Aplicação (ASC)", descricao:`
      Este componente documenta um controle de segurança a fim de facilitar sua aprovação, manutenção, uso, verificação e comunicação.
      A ISO/IEC 27034-1:2011 fornece uma visão geral do componente de Controle de Segurança da Aplicação (ASC) e uma descrição dos dados que compõem um ASC. As organizações podem implementar ASCs utilizando uma abordagem narrativa ou personalizada que inclua as recomendações mínimas identificadas na ISO/IEC 27034-1:2011, seção 8.1.2.6.

1) Quais evidências demonstram que cada ASC foi devidamente documentado para facilitar sua aprovação, manutenção, uso, verificação e comunicação?
2) Que registros comprovam que as organizações implementaram ASCs seguindo as recomendações mínimas da ISO/IEC 27034-1:2011, seção 8.1.2.6?
3) Existem documentos que provem que os ASCs foram implementados usando uma abordagem narrativa ou personalizada conforme permitido pela norma?
4) Quais provas indicam que os dados que compõem cada ASC foram completos e corretamente registrados no repositório da organização?
5) Há registros de auditorias ou revisões que confirmem que os ASCs estão em conformidade com os padrões e diretrizes da ISO/IEC 27034-1:2011?

      `,obrigatorio: true,
    },
    {titulo:" 2.9 Modelo de Referência do Ciclo de Vida de Segurança da Aplicação", descricao:`
      O propósito deste componente é:
a) ajudar uma organização a demonstrar quando os ASCs são aplicados no ciclo de vida de uma aplicação (ou seja, fornecer um conjunto de valores permitidos para o atributo “Quando” dos ASCs);
b) fornecer uma referência para os papéis envolvidos na execução das atividades ou tarefas de um ASC;
c) ajudar a organização a validar cada um de seus ciclos de vida de aplicação, especificando todas as atividades e atores potencialmente envolvidos na segurança da aplicação;
d) ajudar a organização a garantir que as preocupações de segurança sejam corretamente tratadas em todas as etapas de seus ciclos de vida de aplicação;
e) ajudar a organização a minimizar o custo e o impacto da introdução das práticas da ISO/IEC 27034 em seus projetos de aplicação, mantendo seus ciclos de vida de aplicação existentes;
f) facilitar a comunicação entre equipes envolvidas em diferentes domínios de conhecimento;
g) fornecer à organização um modelo padrão para alinhar os ASCs entre suas equipes de projeto de aplicação, apesar das diferenças nos ciclos de vida das aplicações; e
h) fornecer às organizações um modelo padrão para compartilhar ASCs com outras organizações, apesar das diferenças nos ciclos de vida das aplicações.

1) Quais evidências demonstram que os ASCs foram aplicados corretamente em todas as fases do ciclo de vida da aplicação, conforme definido no atributo “Quando”?
2) Que registros comprovam que os papéis e responsabilidades para execução das atividades dos ASCs foram atribuídos e documentados?
3) Existem documentos ou relatórios que validem que todas as atividades e atores envolvidos na segurança da aplicação foram corretamente identificados e monitorados em cada ciclo de vida?
4) Quais provas indicam que as preocupações de segurança foram tratadas adequadamente em todas as etapas do ciclo de vida da aplicação?
5) Há registros que comprovem que a organização utilizou o modelo padrão para alinhar e compartilhar ASCs entre equipes de projeto ou com outras organizações, mesmo com ciclos de vida de aplicação diferentes?

      `,obrigatorio: true,
    },
    {titulo:" 2.10 Modelo de Ciclo de Vida de Segurança da Aplicação", descricao:`

      O propósito deste componente do ONF é:
a) ajudar a organização a descobrir e descrever formalmente o(s) modelo(s) de ciclo de vida de segurança da aplicação que já está utilizando;
b) ajudar a organização a completar esses modelos, se necessário, com a ajuda do Modelo de Referência do Ciclo de Vida de Segurança da Aplicação descrito nesta Norma Internacional (ou seja, adicionar camadas, estágios, atividades ou atores);
c) facilitar a comunicação dos ASCs às equipes de desenvolvimento de aplicações; e
d) facilitar a integração dos ASCs com outras atividades já realizadas pelas equipes de desenvolvimento de aplicações.

Um modelo de ciclo de vida de segurança da aplicação é baseado em um modelo de ciclo de vida da aplicação, mas é utilizado para gerenciar atividades de segurança da aplicação. Ele deve apresentar camadas, estágios e atividades.


1) Quais evidências demonstram que o modelo de ciclo de vida de segurança da aplicação foi formalmente documentado pela organização?
2) Que registros comprovam que o modelo inclui todas as camadas, estágios e atividades necessários para gerenciar a segurança da aplicação?
3) Existem documentos que provem que o modelo de segurança da aplicação foi baseado em um modelo de ciclo de vida da aplicação existente?
4) Quais provas indicam que as equipes de desenvolvimento de aplicações estão utilizando o modelo de ciclo de vida de segurança para gerenciar atividades de segurança?
5) Há registros de auditorias ou revisões que confirmem que o modelo de ciclo de vida de segurança da aplicação está atualizado e em conformidade com as práticas da organização?
  
      `,obrigatorio: true,
    },
    {titulo:" 2.11 Processo de Gerenciamento de Segurança da Aplicação ", descricao:`

      O Processo de Gerenciamento de Segurança da Aplicação permite que uma organização gerencie a segurança de cada aplicação utilizada pela organização.
      O Processo de Gerenciamento de Segurança da Aplicação é o processo geral para gerenciar a segurança de cada aplicação utilizada pela organização. Ele é uma especialização do processo de gerenciamento de riscos apresentado na ISO/IEC 27005.

1) Quais evidências demonstram que a organização implementou o Processo de Gerenciamento de Segurança da Aplicação para cada aplicação utilizada?
2) Que registros comprovam que o processo foi aplicado conforme as diretrizes de gerenciamento de riscos da ISO/IEC 27005?
3) Existem documentos que provem que cada aplicação passou por análise de segurança como parte do processo de gerenciamento?
4) Quais provas indicam que as medidas de segurança implementadas foram monitoradas e gerenciadas durante o ciclo de vida de cada aplicação?
5) Há registros de auditorias ou revisões que confirmem a eficácia do Processo de Gerenciamento de Segurança da Aplicação em todas as aplicações da organização?

      
      `,obrigatorio: true,
    },
    {titulo:" 2.12 Processo de Análise de Riscos de Segurança da Aplicação", descricao:`

      Identificar e avaliar os riscos de segurança da aplicação em todo o ciclo de vida da aplicação, a fim de fornecer um processo de análise de riscos de segurança da aplicação preciso e repetível, assim como ferramentas de análise de riscos aprovadas pela organização.
O Processo de Análise de Riscos de Segurança da Aplicação é o processo para compreender as exposições a riscos de cada aplicação utilizada por uma organização. Ele é uma especialização de uma parte do processo de gerenciamento de riscos apresentado na ISO/IEC 27005.

1) Quais evidências demonstram que a organização identificou e avaliou os riscos de segurança em todo o ciclo de vida de cada aplicação?
2) Que registros comprovam que a análise de riscos de segurança da aplicação foi realizada de forma precisa e repetível?
3) Existem documentos que provem que as ferramentas de análise de riscos utilizadas foram aprovadas pela organização?
4) Quais provas indicam que os riscos identificados foram tratados conforme o Processo de Análise de Riscos de Segurança da Aplicação?
5) Há registros de auditorias ou revisões que confirmem que o processo de análise de riscos de segurança da aplicação está alinhado com a ISO/IEC 27005?


      `,obrigatorio: true,
    },
    {titulo:" 2.13 Processo de Verificação de Segurança da Aplicação", descricao:`

O propósito deste processo é demonstrar o Nível de Confiança Real de uma aplicação a qualquer momento do ciclo de vida da aplicação.
Este é um processo simples pelo qual uma equipe de verificação checa os resultados das medições de verificação de cada um dos ASCs exigidos pelo Nível de Confiança Alvo da aplicação.

1) Quais evidências demonstram que o Nível de Confiança Real da aplicação foi medido em algum momento do ciclo de vida da aplicação?
2) Que registros comprovam que a equipe de verificação realizou medições para cada ASC exigido pelo Nível de Confiança Alvo da aplicação?
3) Existem documentos que provem que os resultados das medições de verificação foram revisados e validados pela equipe de verificação?
4) Quais provas indicam que os ASCs implementados estão alinhados com o Nível de Confiança Alvo da aplicação?
5) Há registros de auditorias ou relatórios que confirmem que o processo de verificação do Nível de Confiança Real foi seguido corretamente em todas as aplicações da organização?

      
      `,obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 3: Protocolos e estrutura de dados de controle de segurança da aplicação",
    descricao:`
    O Processo de Gerenciamento de Segurança de Aplicações (ASMP) é o método usado por uma organização para garantir a segurança de cada aplicação que ela desenvolve ou utiliza. O Comitê ONF é responsável por manter esse processo e assegurar que ele seja aplicado em todos os projetos. O proprietário da aplicação e o gerente do projeto devem garantir que o ASMP seja implementado corretamente.

O ASMP é dividido em cinco etapas:
•Identificar requisitos e o ambiente da aplicação;
•Avaliar riscos de segurança;
•Criar e manter o Framework Normativo da Aplicação (ONF);
•Operar e provisionar a aplicação;
•Auditar a segurança da aplicação.

As três primeiras etapas servem para definir e registrar controles de segurança adequados (ASCs). As duas últimas tratam de implementar e verificar esses controles. Definir requisitos de segurança logo no início ajuda a evitar problemas no andamento do projeto.
A ISO/IEC 27034 oferece processos e componentes que ajudam organizações a criar aplicações confiáveis e a demonstrar que atingiram um nível de confiança desejado. O ASMP e o Processo de Gerenciamento do ONF atuam em níveis diferentes: o ONF é contínuo e organizacional; o ASMP é aplicado a cada projeto específico.
Propósito: permitir que a organização gerencie a segurança de cada aplicação.

  Princípios:
•toda aplicação deve ter um Nível de Confiança Direcionado;
•componentes e processos de segurança devem vir do ONF;
•todos os controles previstos devem ser implementados, verificados e auditados.
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Processo de Gerenciamento de Segurança de Aplicações – ASMP", 
      descricao: `
      A identificação do ambiente da aplicação permite que a organização especifique os contextos
(comercial, tecnológico e regulatório) da aplicação, suas principais especificações, atores e processos,
e as informações envolvidas em sua aquisição e uso.
Essa etapa corresponde à etapa de “estabelecimento de contexto” no processo de gestão de riscos definido
pela ISO/IEC 27005. Ela fornece as informações necessárias para a etapa de avaliação de riscos que vem em seguida.

A primeira etapa do ASMP tem como objetivo identificar todos os requisitos da aplicação, incluindo:
a) atores;
b) especificações;
c) informações;
d) ambiente.

O ambiente da aplicação é composto por:
a) um contexto tecnológico;
b) um contexto comercial;
c) um contexto regulatório.

Os contextos são apresentados com mais detalhes na ISO/IEC 27034-1:2011, seções 8.1.2.1 a 8.1.2.2.

Questões Relevantes para identificação:

Qual é o proposito?
      Quem é o dono da aplicação?
      identificar, inventariar e consolidar as informações necessárias para realizar o resumo da análise de riscos de segurança da aplicação;
      definir uma versão preliminar do Framework Normativo da Aplicação - ANF

Quais são os resultados esperados?
      a) uma pessoa é oficialmente designada como proprietária da aplicação;
      b) um ANF preliminar, contendo:
        1) breve descrição dos três contextos;
        2) requisitos funcionais e não funcionais;
        3) arquitetura da aplicação (também considerando o ambiente de operação);
        4) grupos de informações envolvidos no provisionamento e operação da aplicação.
      `,
      obrigatorio:true,
    },
    {titulo:"2. Criar e manter o Framework Normativo da Aplicação - ANF", descricao:`
      A terceira etapa do ASMP é selecionar todos os elementos do ONF que se aplicam a um projeto específico de aplicação e completar o ANF para essa aplicação. 
      O processo de criação do ANF para uma aplicação específica é essencial. 
      Como mostrado na Figura 6, o ANF é um subconjunto ou refinamento do ONF que contém apenas as informações aplicáveis necessárias para uma aplicação específica, tais como o Nível de Confiança Direcionado da aplicação, 
      os ASCs necessários, os contextos da aplicação (regulatório, comercial e tecnológico), as responsabilidades e qualificações profissionais dos atores, e as especificações da aplicação. Essas informações…
      
      Proposito: 

      O propósito de estabelecer esta etapa é gerenciar e manter o conteúdo do ANF ao longo do ciclo de vida de uma aplicação específica, revisitando, validando, importando e consolidando elementos relevantes do ONF, incluindo:

a) ASCs identificados pelo Nível de Confiança Direcionado da aplicação;
b) informações produzidas em diferentes etapas do ASMP;
c) o ciclo de vida da aplicação.

Os principais resultados desta etapa incluem:

a) um ANF completo, atualizado e publicado, contendo todos os elementos necessários para proteger a aplicação;
b) um ciclo de vida da aplicação para o projeto de aplicação;
c) ASCs aplicáveis ao projeto de aplicação.

1. Quais evidências podem ser apresentadas para demonstrar que o ANF completo foi atualizado e oficialmente publicado?
2. Que documentos ou registros podem comprovar que o ciclo de vida da aplicação foi formalmente definido para o projeto?
3. Quais provas podem ser fornecidas para mostrar que todos os ASCs aplicáveis ao projeto foram identificados e aprovados?
4. Que evidências podem confirmar que o ANF contém todos os elementos necessários para garantir a segurança da aplicação?
5. Como demonstrar, por meio de documentação ou registros, que o ANF foi revisado e atualizado de acordo com as últimas informações do ONF e do ASMP?

      
      `, obrigatorio: true
    },
    {titulo:"3. Provisionar e operar a aplicação", descricao:`
      A quarta etapa do ASMP envolve o uso dos ASCs fornecidos pelo ANF para a aplicação específica em seu ciclo de vida. Por exemplo, uma organização pode decidir desenvolver, adquirir e/ou operar uma aplicação. Essa etapa do ASMP deve ser aplicada tanto às fases de provisionamento quanto de operação do ciclo de vida da aplicação e ajudar a integrar os ASCs identificados pelo Nível de Confiança Direcionado a quaisquer processos ou componentes existentes da aplicação.
Essa etapa também inclui verificar se todas as atividades relacionadas aos ASCs foram integradas ao ciclo de vida da aplicação.
Nessa etapa, as equipes de projeto e de verificação recebem os ASCs associados ao Nível de Confiança Direcionado
    
Propósito

O objetivo da implementação desse processo é estabelecer os elementos do ANF que são relevantes para as etapas, fases e atividades abrangidas pelo projeto.

A equipe do projeto implementa os ASCs do ANF:
a) a parte de atividade de segurança de cada ASC é executada pelo ator identificado no ASC; e
b) a parte de medição de segurança de cada ASC é executada pelo ator identificado no ASC.

1. Que evidências podem ser apresentadas para comprovar a lista de ASCs concluídos e os resultados obtidos em cada implementação?
2. Quais artefatos atualizados da aplicação podem ser fornecidos como prova de que o ANF foi revisado e está alinhado ao estado atual do projeto?
3. Que documentação confirma o envio de feedback para o processo de gerenciamento do ONF e demonstra que ele foi devidamente considerado?
4. Quais registros ou relatórios podem comprovar a identificação de lacunas entre o Nível de Confiança Direcionado e o Nível de Confiança Real da aplicação?
5. Quais relatórios de auditoria podem ser apresentados como prova, incluindo escopo da auditoria, status de cada ASC, falhas identificadas e ações corretivas propostas ou implementadas?
    
      `, obrigatorio: true,

    },
    {titulo:"4. Auditar a segurança da aplicação", descricao: `
      A quinta e última etapa do ASMP é verificar a segurança da aplicação, ou seja, verificar os resultados das atividades de medição de verificação de cada ASC especificado no Nível de Confiança Direcionado que deve ser implementado na aplicação. Os resultados produzidos por essas atividades de verificação dos ASCs fornecem evidências de que os ASCs aplicáveis, no momento da verificação, foram implementados conforme esperado.
Essa etapa do ASMP pode ser realizada a qualquer momento durante o ciclo de vida da aplicação. Dependendo do Nível de Confiança Direcionado da aplicação, essa etapa pode ser realizada uma única vez, periodicamente ou acionada por eventos.
Esse processo resulta no Nível de Confiança Real em um determinado momento. A aplicação é considerada segura quando o Nível de Confiança Real é igual ou superior ao Nível de Confiança Direcionado correspondente, aprovado pelo proprietário da aplicação em determinado momento.
A parte de medição de verificação dos ASCs especifica atividades de segurança que devem ser verificadas para fornecer evidê… (o texto termina aqui; posso continuar se você enviar o restante).

Propósito:

O propósito da quinta etapa do ASMP é verificar e registrar formalmente as evidências que comprovam se uma aplicação específica atingiu e está 
mantendo o Nível de Confiança Direcionado da aplicação em um determinado momento.

Resultados esperados:


a) resultados da execução de um processo de revisão de segurança da aplicação que demonstrem que todas as medições de verificação fornecidas por todos os ASCs no ANF para a aplicação específica foram realizadas e que os resultados foram verificados;
b) indicação do Nível de Confiança Real da aplicação em um determinado momento.
c) evidências de se uma aplicação específica atingiu e está mantendo o seu Nível de Confiança Direcionado em um determinado momento;
d) resultados das verificações e evidências registradas sobre o alcance e a manutenção do Nível de Confiança Direcionado em um determinado momento.

1. Que evidências podem ser apresentadas para demonstrar que a aplicação atingiu o Nível de Confiança Direcionado no momento da avaliação?
2. Quais registros comprovam que a aplicação está mantendo o Nível de Confiança Direcionado ao longo do tempo?
3. Que documentos ou relatórios podem mostrar os resultados das verificações realizadas e confirmar que todos os ASCs foram devidamente medidos e validados?
4. Quais evidências registradas demonstram que as medições de verificação dos ASCs foram realizadas conforme definido no ANF?
5. Que prova pode ser fornecida para indicar o Nível de Confiança Real da aplicação em um momento específico e como ele se compara ao Nível de Confiança Direcionado?
      
      `,obrigatorio: true,
    },
    {titulo:"5. Elementos do Framework Normativo da Aplicação - ANF", descricao:`
      O Framework Normativo da Aplicação (ANF) é a fonte autorizada das informações detalhadas necessárias para que uma aplicação específica alcance o seu Nível de Confiança Direcionado.
Ele fornece o histórico dos elementos, decisões e resultados acumulados durante o ciclo de vida da aplicação.
      Os requisitos de segurança no ANF são derivados da avaliação dos riscos associados ao uso da aplicação pela organização, conforme realizado na etapa 2 do ASMP.
Para cada projeto de aplicação, o ANF é criado e preenchido com os contextos tecnológicos, regulatórios e de negócios relevantes, as especificações da aplicação e os ASCs apropriados necessários para o projeto. Portanto, o ANF é um subconjunto ou um refinamento do ONF.
`, obrigatorio: true,
    },
    {titulo:"5.1 Contexto de negócios da aplicação", descricao:`

Este componente é usado para armazenar os elementos de negócio definidos, identificados e tratados por um projeto de aplicação. Ele introduz uma abordagem padronizada e aprovada para mitigar riscos associados ao contexto de negócios da aplicação durante seu ciclo de vida de segurança. Descreve as escolhas de negócio que são aplicáveis à aplicação-alvo. As propriedades de negócio da aplicação determinadas nesta etapa são usadas para localizar partes específicas do ONF ao compilar o ANF.
O contexto de negócios da aplicação é um inventário documentado de todos os processos de negócio, padrões e melhores práticas relacionados a um projeto de aplicação, provenientes principalmente do ONF. Realizar e operar uma aplicação pode causar riscos. Uma organização deve avaliar riscos, definir requisitos de segurança e identificar ASCs para mitigá-los. Os implementadores de ASC precisam saber por que um ASC está sendo fornecido, ou seja, qual requisito de segurança o ASC está atendendo. Eles devem encontrar essas informações necessárias no componente de contexto de negócios do ANF.

1) Quais evidências demonstram que todos os processos de negócio relevantes da aplicação foram devidamente identificados, documentados e incorporados ao contexto de negócios no ANF?
2) Que provas podem ser apresentadas para confirmar que os riscos associados à realização e operação da aplicação foram avaliados e que seus resultados foram utilizados para definir os requisitos de segurança?
3) Existe evidência de que cada ASC selecionado foi claramente relacionado ao requisito de segurança que ele atende? Se sim, apresente os registros que mostram essa vinculação no ANF.
4) Quais documentos, atas ou análises comprovam que o contexto de negócios da aplicação foi construído utilizando elementos padronizados e provenientes do ONF?
5) Que evidências mostram que os implementadores dos ASCs tiveram acesso às informações do contexto de negócios e compreenderam o motivo e a finalidade de cada ASC aplicado?
      
      `,obrigatorio: true,
    },
    {titulo:"5.2 Contexto regulatório da aplicação", descricao:`

      Este componente é usado para armazenar os requisitos legais e regulatórios relevantes aplicáveis aos locais onde a aplicação é usada ou implantada. Ele fornece justificativas para alguns dos requisitos de segurança da aplicação e para os ASCs.
      O contexto regulatório da aplicação refere-se a todas as leis, regulamentos e regras comuns provenientes do território ou jurisdição que possam impactar a realização, operação ou utilização de dados da aplicação (por exemplo, leis de privacidade, riscos provenientes de diferentes legislações nacionais em países onde a mesma aplicação é utilizada).
      
1) Quais evidências demonstram que todos os requisitos legais e regulatórios aplicáveis à região de uso da aplicação foram identificados e documentados no contexto regulatório?
2) Que provas podem ser apresentadas para confirmar que a aplicação está em conformidade com as leis de privacidade e proteção de dados dos países onde ela é utilizada?
3) Existem registros ou relatórios formais que comprovem que as diferenças regulatórias entre países foram analisadas e consideradas no desenvolvimento e operação da aplicação?
4) Quais documentos demonstram que determinados requisitos de segurança ou ASCs foram incluídos na ANF especificamente por exigências legais ou regulatórias?
5) Que evidências indicam que revisões periódicas do contexto regulatório foram realizadas para garantir que mudanças em leis ou normas impactantes fossem incorporadas ao projeto da aplicação?
      `,obrigatorio: true,
    },
    {titulo:"5.3 Contexto tecnológico da aplicação", descricao:`
     Este componente ajuda a determinar os riscos de segurança provenientes da infraestrutura tecnológica da aplicação. Ele fornece informações sobre quais componentes de TI podem ser usados para dar suporte aos ASCs que exigem esse tipo de suporte.
     O contexto tecnológico é uma documentação dos componentes de TI da aplicação (por exemplo, componentes físicos, aplicações, serviços, incluindo suas configurações e parâmetros) e das próprias melhores práticas e regras da organização que se aplicam ao uso desses componentes.
     
1) Quais evidências comprovam que todos os componentes de TI utilizados pela aplicação (hardware, software e serviços) foram devidamente documentados, incluindo suas configurações e parâmetros?
2) Apresente provas de que os riscos de segurança associados à infraestrutura tecnológica da aplicação foram identificados e avaliados.
3) Quais registros demonstram que os ASCs que dependem de componentes tecnológicos possuem suporte adequado e compatível dentro da infraestrutura descrita?
4) Forneça evidências de que as melhores práticas e regras internas da organização referentes ao uso de componentes de TI foram aplicadas à aplicação durante seu ciclo de vida.
5) Há documentação ou relatórios que provem que todos os componentes tecnológicos utilizados pela aplicação estão em conformidade com padrões e políticas internas vigentes? Se sim, apresente-os.
     
     
      `,obrigatorio: true,
    },
    {titulo:"5.4 Especificações da aplicação", descricao:`

Este componente é usado para armazenar informações que ajudam a determinar e mitigar riscos de segurança provenientes das especificações da aplicação, e também para mitigar o risco de implementar e/ou utilizar incorretamente essas especificações.
O componente de especificações da aplicação é uma documentação dos requisitos funcionais gerais de TI da aplicação. Ele deve incluir todas as especificações, funcionalidades e serviços incluídos ou oferecidos pela aplicação, incluindo documentos e melhores práticas para implementá-los, utilizá-los e verificá-los.
As especificações de segurança e as especificações que afetam a segurança são de especial importância para o ASMP.
Exemplos de especificações de segurança incluem requisitos mínimos de segurança, como armazenamento de senhas, transferência, configuração e controles de gerenciamento de sessão.
Exemplos de especificações que afetam a segurança incluem requisitos sobre como os usuários finais e os diferentes níveis da aplicação autenticam uns aos outros.

1)Quais evidências demonstram que todos os requisitos funcionais, não funcionais e de segurança da aplicação estão claramente documentados nas especificações da aplicação?
2)Que provas podem ser fornecidas para confirmar que os requisitos mínimos de segurança (ex.: armazenamento de senhas, gestão de sessões, controles de configuração) foram implementados conforme definido nas especificações?
3)Quais documentos ou registros comprovam que as especificações que afetam a segurança — como autenticação entre usuários e camadas da aplicação — foram corretamente aplicadas e validadas?
4)Que evidências demonstram que a equipe utilizou as melhores práticas documentadas nas especificações da aplicação durante o desenvolvimento, uso e verificação da aplicação?
5)Quais artefatos mostram que possíveis riscos derivados das especificações da aplicação foram identificados, avaliados e mitigados conforme orientado nesta etapa do ANF?

      `,obrigatorio: true,
    },
    {titulo:"5.5 Atores da aplicação: papéis, responsabilidades e qualificações", descricao:`
      Este componente ajuda a determinar e mitigar riscos de segurança provenientes das pessoas envolvidas com a aplicação. Ele também ajuda a garantir que todos os papéis críticos para todos os processos estejam preenchidos, que todas as responsabilidades estejam definidas, que conflitos de interesse sejam evitados e que as pessoas designadas aos papéis possuam qualificações profissionais suficientes.
Este componente é uma documentação dos papéis, responsabilidades e qualificações necessárias para os atores envolvidos com a aplicação.

1)Quais evidências comprovam que todos os papéis críticos relacionados à aplicação foram identificados e devidamente preenchidos?
2)Que documentação mostra que todas as responsabilidades de cada ator da aplicação foram claramente definidas e atribuídas?
3)Existem registros que comprovem que conflitos de interesse entre os atores da aplicação foram identificados e evitados?
4)Quais provas demonstram que as pessoas designadas para os papéis críticos possuem as qualificações profissionais necessárias para exercer suas funções?
5)Há evidências de treinamentos, certificações ou avaliações que comprovem a capacidade dos atores em executar corretamente suas responsabilidades relacionadas à aplicação?
       `,obrigatorio: true,
    },
    {titulo:"5.6 ASCs selecionados para as etapas do ciclo de vida da aplicação ", descricao:`
      Este componente documenta os controles de segurança selecionados para a aplicação, a fim de facilitar sua aprovação, uso, verificação e comunicação.
      Os controles de segurança da aplicação são métodos, processos e/ou procedimentos utilizados para mitigar os riscos introduzidos na organização pela adição da aplicação específica.

1) Quais evidências demonstram que todos os controles de segurança selecionados para a aplicação foram devidamente documentados e aprovados?
2) Que registros comprovam que os controles de segurança estão sendo efetivamente utilizados durante as etapas do ciclo de vida da aplicação?
3) Há provas de que os controles de segurança selecionados foram verificados e seus resultados avaliados quanto à eficácia?
4) Que documentos ou relatórios mostram que os métodos, processos e procedimentos aplicados mitigam adequadamente os riscos introduzidos pela aplicação?
5) Existem registros que comprovem a comunicação formal dos controles de segurança selecionados para todas as partes interessadas do projeto da aplicação?

       `,obrigatorio: true,
    },
    {titulo:"5.7 Processos relacionados à segurança da aplicação", descricao:`

      O propósito deste componente do ANF é ajudar a equipe do projeto a definir, gerenciar e verificar a segurança da aplicação.
      Esses processos ajudam a equipe do projeto a integrar atividades de segurança nos processos do ciclo de vida com os quais já estão familiarizados.

1) Quais evidências demonstram que a equipe do projeto definiu claramente as atividades de segurança da aplicação?
2) Que registros comprovam que as atividades de segurança foram efetivamente gerenciadas ao longo do ciclo de vida da aplicação?
3) Existem provas de que os processos de segurança foram integrados aos processos existentes do ciclo de vida da aplicação?
4) Quais documentos ou relatórios confirmam que a equipe do projeto verificou a execução e eficácia das atividades de segurança?
5) Há registros de auditorias, revisões ou avaliações que comprovem que a segurança da aplicação foi monitorada e mantida conforme os processos definidos no ANF?
       `,obrigatorio: true,
    },
    {titulo:"5.8 Ciclo de vida da aplicação", descricao:`
      O propósito deste componente é permitir que a equipe do projeto integre de forma contínua as atividades de segurança e as medições de verificação definidas nos ASCs com as atividades que ocorrem durante o ciclo de vida da aplicação, com as quais a equipe do projeto já está familiarizada.
      O ciclo de vida da aplicação é um subconjunto do Modelo de Referência do Ciclo de Vida de Segurança da Aplicação (ver ISO/IEC 27034-1:2011, 8.1.2.7) contido no ONF. O ciclo de vida para o projeto específico conterá apenas os processos necessários para o projeto da aplicação. 
      Por exemplo, um projeto totalmente desenvolvido internamente não exigiria um processo de terceirização.
       
1) Quais evidências demonstram que as atividades de segurança definidas nos ASCs foram integradas aos processos do ciclo de vida da aplicação?
2) Que registros comprovam que as medições de verificação dos ASCs foram realizadas durante as atividades do ciclo de vida do projeto?
3) Existem documentos ou relatórios que confirmem que apenas os processos necessários para o projeto específico da aplicação foram incluídos no ciclo de vida?
4) Quais provas indicam que a equipe do projeto seguiu corretamente o Modelo de Referência do Ciclo de Vida de Segurança da Aplicação contido no ONF?
5) Há evidências de que processos não aplicáveis, como terceirização em projetos totalmente internos, foram corretamente excluídos do ciclo de vida da aplicação?
      
      `,obrigatorio: true,
    },
    {titulo:"5.9 Informações envolvidas pela aplicação", descricao:`
      O propósito deste componente do ANF é facilitar a categorização de segurança das informações/dados da aplicação, permitindo que a equipe do projeto mapeie o fluxo de informações críticas e realize uma avaliação de risco de segurança da aplicação.
      Com base na classificação das informações/dados da aplicação, o gerenciamento de acesso aos dados é definido para cada papel estabelecido.

1) Quais evidências demonstram que as informações e dados da aplicação foram corretamente categorizados quanto à segurança?
2) Que registros comprovam que o fluxo de informações críticas dentro da aplicação foi mapeado pela equipe do projeto?
3) Existem documentos que comprovem que a avaliação de risco de segurança da aplicação foi realizada com base na classificação das informações/dados?
4) Quais provas indicam que o gerenciamento de acesso aos dados foi definido de acordo com os papéis estabelecidos para a aplicação?
5) Há registros de auditorias ou verificações que confirmem que as medidas de proteção de dados foram aplicadas conforme a categorização de segurança definida?



       `,obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 4: Validação e verificação (Sob desenvolvimento)",
    descricao:`
    A Parte 4 da ISO/IEC 27034 tem uma história peculiar:
    Ela foi inicialmente cancelada, depois ressuscitada. Ela atingiu o status de Draft International Standard antes de ser retirada novamente no final de 2020 devido a resistência do CASCO - Comitê da ISO sobre Avaliação de Conformidade ISO.
    Desde 2021, a equipe recomeçou como um Preliminary Work Item, desta vez em colaboração com o CASCO ISO.
    Conteúdo da Parte 4:
    A Parte 4 trata de "Validation and verification" (Validação e verificação) e fornece uma descrição detalhada de um processo de segurança de aplicações para desenvolver, validar, implementar, verificar e melhorar continuamente esquemas de verificação usados para auditar e verificar CourseMonster (https://www.coursemonster.com/) a segurança das aplicações.
    Esta parte discute o processo de validação e certificação, que determina o nível de confiança que cada aplicação possui em relação aos seus requisitos de segurança da informação previamente estabelecidos ISO.
    Status Atual
    Portanto, a Parte 4 está em desenvolvimento e ainda não foi publicada como padrão final. Por isso, na lista das partes publicadas da ISO/IEC 27034, você não vê a Parte 4 entre as demais - ela ainda está em processo de aprovação e padronização, trabalhando em colaboração com o comitê de avaliação de conformidade da ISO.
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    /*{titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }*/
    ],
  },
  {titulo:"Parte 5: Protocolos e estrutura de dados dos controles de segurança da aplicação ",
    descricao:`
    Há uma necessidade crescente de as organizações se concentrarem na proteção de suas informações no nível da aplicação. Uma abordagem sistemática para aumentar o nível de segurança das aplicações fornece à organização evidências de que as informações utilizadas ou armazenadas por suas aplicações estão sendo adequadamente protegidas.
A ISO/IEC 27034 (todas as partes) fornece conceitos, princípios, frameworks, componentes e processos para auxiliar as organizações a integrar a segurança de forma contínua ao longo do ciclo de vida de suas aplicações.
O Controle de Segurança da Aplicação (ASC) é um dos componentes-chave deste documento.
Para facilitar a implementação do framework de segurança de aplicações da ISO/IEC 27034 (todas as partes) e a comunicação e troca de ASCs, um conjunto mínimo de atributos essenciais deve ser documentado e explicado para a realização dos ASCs e de certos outros componentes do framework.
Este documento explica o conjunto mínimo de atributos essenciais dos ASCs e detalha ainda mais o Modelo de Referência do Ciclo de Vida de Segurança da Aplicação (ASLCRM).

O propósito deste documento é documentar e explicar as informações essenciais e os requisitos de estrutura de dados para os ASCs. As vantagens de um conjunto padronizado de atributos de informação essenciais e da estrutura de dados dos ASCs incluem:
a) criação, comunicação, proteção e verificação de ASCs normalizadas, em conformidade com os requisitos deste documento; e
b) minimização do custo de segurança em projetos de aplicação, facilitando a reutilização de controles aprovados e a aquisição de ASCs de diferentes fontes.

Além disso, este documento define e detalha os processos, atividades e papéis envolvidos no Modelo de Referência do Ciclo de Vida de Segurança da Aplicação (ASLCRM).
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Modelo de Referência do Ciclo de Vida de Segurança da Aplicação ", descricao: `
      O propósito desta cláusula é detalhar e listar os rótulos de atividades propostos pelo Modelo de Referência do Ciclo de Vida de Segurança da Aplicação (ASLCRM) definido na ISO/IEC 27034-1.

Mostra-se que o ciclo de vida de uma aplicação consiste basicamente em duas etapas: Provisionamento e Operação. A primeira é subdividida nas fases de Preparação, Realização e Transição, enquanto a segunda é subdividida nas fases de Utilização / Manutenção, Arquivamento e Destruição.

Em cada fase, um conjunto de atividades em gerenciamento da aplicação, provisionamento e operação da aplicação, gerenciamento de infraestrutura e auditoria da aplicação é executado, envolvendo vários atores.

O objetivo dos itens 6.2 a 6.6 é detalhar ainda mais esses rótulos de atividades, assim como fornecer definições genéricas dos atores envolvidos.

      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Camada de Gerenciamento da Aplicação", descricao:`
      A camada de gerenciamento da aplicação compreende processos do domínio de conhecimento de governança realizados durante as etapas de provisionamento e operação da aplicação.

As atividades de gerenciamento do provisionamento da aplicação são realizadas por gerentes de projeto e gerentes organizacionais, durante as etapas de provisionamento do ciclo de vida da aplicação.

As atividades de gerenciamento da operação da aplicação estão relacionadas ao gerenciamento e uso da aplicação durante as etapas de operação.

Conforme a ISO/IEC 15288, os processos em ambas as etapas compreendem iniciação do projeto, planejamento, execução, monitoramento e controle e encerramento.
      
1) Quais são as etapas do ciclo de vida da aplicação em que a camada de gerenciamento da aplicação atua?
2) Quem é responsável pelas atividades de gerenciamento do provisionamento da aplicação?
3) Quais atividades estão incluídas no gerenciamento da operação da aplicação?
4) De acordo com a ISO/IEC 15288, quais processos são comuns às etapas de provisionamento e operação da aplicação?
5) Explique a diferença entre as atividades de gerenciamento do provisionamento e da operação da aplicação.

`, obrigatorio: true
    },
    {titulo:"1.2 Camada de Provisionamento e Operação da Aplicação", descricao:`

      A camada de provisionamento e operação da aplicação compreende atividades do domínio de engenharia de software relacionadas ao provisionamento, manutenção, arquivamento e destruição da aplicação.

Conforme recomendado por normas como ISO/IEC 12207, ISO/IEC 15288, ISO/IEC 37500 e ISO/IEC 15489, as áreas de atividades relevantes são preparação, terceirização, desenvolvimento, aquisição, transição, utilização e manutenção, arquivamento e destruição.

1) Qual é o objetivo principal do passo de criação e manutenção do ANF no processo de gerenciamento de segurança de aplicações?
2) Quais elementos devem ser incluídos em um ANF preliminar para um projeto de aplicação específico?
3) Como o ANF se relaciona com o ONF (Organization Normative Framework) dentro do gerenciamento de segurança de aplicações?
4) Explique a importância de atualizar e validar continuamente o ANF ao longo do ciclo de vida de uma aplicação.
5) Quais são as responsabilidades do proprietário da aplicação em relação à criação e manutenção do ANF?
    
      `, obrigatorio: true,

    },
    {titulo:"1.3 Gerenciamento de infraestrutura", descricao: `
Esta camada compreende áreas de atividade relacionadas à infraestrutura de gerenciamento de serviços de TI da organização que dão suporte à aplicação. Tais atividades geralmente são recomendadas por normas como a ISO/IEC 20000.

O objetivo do Gerenciamento de Infraestrutura é fornecer a infraestrutura e os serviços necessários aos projetos para apoiar os objetivos da organização e da aplicação ao longo do ciclo de vida.

Normalmente, consiste em três áreas de atividade:

1- Gerenciamento da infraestrutura de provisionamento da aplicação
2- Gerenciamento da infraestrutura de operação da aplicação
3- Infraestrutura de arquivamento e descarte da aplicação

Estabelicimento da Infraestruitura:

De acordo com a ISO/IEC 15288, o objetivo de estabelecer a infraestrutura é definir os requisitos de infraestrutura do projeto e as restrições de negócios que influenciam e controlam a provisão de recursos e serviços de infraestrutura para o projeto. Isso inclui identificar, obter e fornecer os recursos e serviços de infraestrutura necessários para implementar e suportar o provisionamento e a operação da aplicação.

Os rótulos de atividade definidos pelo ASLCRM para esta área de atividade incluem:
a) ajustar, preparar e configurar os ambientes de desenvolvimento, testes, operação e arquivamento;
b) elaborar e atualizar documentos de configuração;
c) validar e atualizar o plano de continuidade e planos de contingência;
d) elaborar o manual do usuário;
e) elaborar o manual do administrador;
f) ajustar procedimentos e políticas corporativas impactados pela implementação do sistema e informar os atores e partes interessadas afetadas por essas mudanças;
g) realizar testes de aceitação para as principais funcionalidades globais.

Manutenção da Infraestrutura:

De acordo com a ISO/IEC 15288, o objetivo de manter a infraestrutura é comunicar-se continuamente ou rotineiramente com os projetos para determinar em que grau os recursos de infraestrutura fornecidos satisfazem suas necessidades. Isso envolve identificar e fornecer melhorias ou alterações nos recursos de infraestrutura à medida que os requisitos do projeto mudam. Normalmente, isso é realizado de forma iterativa usando ciclos do processo planejar-fazer-verificar-agir (plan-do-check-act).

Os rótulos de atividade definidos pelo ASLCRM para esta área de atividade incluem:
a) manter o sistema no grau esperado de confiança;
b) aplicar melhores práticas em gestão de identidade e configuração;
c) realizar periodicamente auditorias e testes internos de segurança;
d) realizar controle de mudanças;
e) preparar os ambientes operacionais;
f) elaborar e atualizar documentos de configuração;
g) validar e atualizar o plano de continuidade e planos de contingência;
h) elaborar o manual do usuário;
i) elaborar o manual do administrador;
j) ajustar procedimentos e políticas corporativas impactados pela implementação do sistema e informar os atores e partes interessadas afetadas por essas mudanças.


  
      `,obrigatorio: true,
    },
    {titulo:"1.4 Autoria da Aplicação", descricao:`
      A camada de auditoria da aplicação compreende áreas de atividade relacionadas ao controle e à verificação. Tais atividades geralmente são realizadas dentro de processos recomendados por normas como ISO 19011, ISO/IEC 15288, ISO/IEC 12207 e documentos de prática do setor, como o CobiT. Um ciclo de vida típico de auditoria consiste em iniciar a auditoria, preparar a auditoria, conduzir a auditoria, elaborar o relatório, concluir a auditoria e realizar o acompanhamento.
      
      Iniciando a auditoria

De acordo com a ISO 19011, o objetivo de iniciar a auditoria é estabelecer um contato inicial com o auditado e determinar a viabilidade da auditoria.
Os rótulos de atividade definidos pelo ASLCRM para esta área de atividade incluem o seguinte:
a) Estabelecer contato inicial com o auditado;
b) Confirmar a autoridade para conduzir a auditoria;
c) Fornecer informações sobre os objetivos, escopo, métodos da auditoria e composição da equipe de auditoria, incluindo especialistas técnicos;
d) Solicitar acesso a documentos e registros relevantes;
e) Determinar os requisitos legais e contratuais aplicáveis e outros requisitos relevantes para as atividades e produtos do auditado;
f) Confirmar o acordo com o auditado quanto à extensão da divulgação e ao tratamento de informações confidenciais;
g) Concordar sobre a presença de observadores e a necessidade de guias para a equipe de auditoria;
h) Identificar questões específicas do engajamento, incluindo aquelas relacionadas à localização do engajamento ou às áreas de interesse e preocupações do auditado;
i) Limitar tarefas com base na viabilidade devido a restrições de tempo e recursos, bem como à cooperação do auditado;
j) Fazer os preparativos para a auditoria, incluindo o agendamento das datas.

      Preparação para Auditoria

De acordo com a ISO 19011, o objetivo de preparar a auditoria é realizar uma revisão de documentos em preparação para a auditoria, elaborar o plano de auditoria, atribuir tarefas à equipe de auditoria e preparar os documentos de trabalho.

Os rótulos de atividades definidos pelo ASLCRM para esta área de atividade incluem os seguintes:
a) Revisar e avaliar os objetivos e o escopo da auditoria;
b) Revisar e determinar os riscos de assuntos relevantes para a indústria do auditado, incluindo condições econômicas, leis e regulamentos e mudanças tecnológicas;
c) Revisar e determinar os riscos da estrutura do auditado, processos de negócios chave, redes, sistemas e aplicações;
d) Revisar e avaliar relatórios de auditorias anteriores, bem como o trabalho de outros especialistas externos à equipe de auditoria;
e) Considerar o risco de irregularidades e atos ilegais durante o engajamento;
f) Considerar o risco que a auditoria representa para a organização do auditado;
g) Considerar possíveis fraquezas ou ausência de controles e seu impacto potencial nos achados da auditoria;
h) Definir o plano de engajamento, incluindo escopo da auditoria, objetivos, riscos, plano de comunicação, cronograma, alocação de recursos e entregáveis;
i) Definir práticas para coletar e avaliar informações dos processos em revisão;
j) Definir práticas para validar o desenho dos controles e seus resultados;
k) Definir práticas para identificar riscos residuais, quando a eficácia do controle não for aceitável.

      Conduzir a Auditoria

De acordo com a ISO 19011, o objetivo de conduzir a auditoria é realizar as atividades reais da auditoria, incluindo a realização da reunião de abertura, a revisão de documentos durante a auditoria, a comunicação durante a auditoria, a atribuição de papéis e responsabilidades de guias e observadores, a coleta e verificação de informações, a geração de achados de auditoria, a preparação das conclusões da auditoria e a realização da reunião de encerramento.

As etiquetas de atividades definidas pelo ASLCRM para esta área de atividade incluem:
a) Conduzir a reunião de abertura;
b) Atribuir papéis e responsabilidades de guias e observadores;
c) Refinar a compreensão dos objetivos da auditoria e do escopo da auditoria;
d) Comunicar-se com a gerência durante a execução da auditoria para facilitar a compreensão do trabalho de auditoria, aprovação de alterações no escopo da auditoria, concordância com os achados da auditoria, bem como conscientização sobre atividades ilegais e outras irregularidades;
e) Supervisionar e conduzir o trabalho de acordo com o plano de auditoria aprovado para cobrir os riscos identificados dentro do cronograma acordado;
f) Obter evidências suficientes e apropriadas para realizar análises e tirar conclusões razoáveis sobre a eficácia do desenho do controle e/ou o resultado dos objetivos do controle;
g) Aplicar procedimentos de teste adicionais para obter evidências suficientes e apropriadas em circunstâncias onde o trabalho de especialistas internos e/ou externos não fornece evidências suficientes e apropriadas.
h) Considerar o efeito cumulativo de pequenas deficiências ou fraquezas nos controles e verificar se a ausência de controles se traduz em uma deficiência ou fraqueza significativa;
i) Preparar uma opinião ou conclusão de auditoria apropriada, apoiada por análise e evidências, incluindo quaisquer limitações de escopo quando as evidências necessárias não forem obtidas por meio de procedimentos de teste adicionais;
j) Conduzir a reunião de encerramento.

      Concluir a Auditoria

De acordo com a ISO 19011, o objetivo de concluir a auditoria é encerrar a auditoria. A auditoria é encerrada quando todas as atividades planejadas foram realizadas, ou conforme acordado com o cliente da auditoria (por exemplo, pode haver uma situação inesperada que impeça a conclusão da auditoria de acordo com o plano).
Os rótulos de atividades definidos pelo ASLCRM para esta área de atividade incluem o seguinte:
a) documentar e realizar lições aprendidas;
b) arquivar e destruir evidências de acordo com o contrato e regulamentações aplicáveis.

      Follow-up

De acordo com a ISO 19011, o objetivo do acompanhamento da auditoria é tirar conclusões da auditoria que possam indicar a necessidade de correções ou de ações corretivas, preventivas ou de melhoria.
Os rótulos de atividades definidos pelo ASLCRM para esta área de atividade incluem o seguinte:
a) realizar reunião de acompanhamento;
b) revisar o plano de ação e as ações tomadas;
determinar se o plano e as ações tomadas foram apropriados para tratar as constatações e recomendações relatadas na auditoria.      
`, obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 6: Não foi possivel a aquisição",
    descricao:`
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    /**{titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }**/
    ],
  },
  {titulo:"Parte 7: Estrutura de previsão de garantia",
    descricao:`

    Objetivo da previsão

    A segurança preditiva ocorre diariamente. O objetivo deste documento é tornar as previsões de Segurança de Aplicações (AS) explícitas, em vez de implícitas, e documentar a previsão de forma consistente. Quando as previsões são consistentes e corretamente documentadas usando o Relatório de Nível de Confiança Esperado (Expected Level of Trust Report), os consumidores das previsões têm uma base muito melhor para tomar decisões de risco com base nesse relatório. Todas as previsões estão inerentemente sujeitas à incerteza, e a precisão de qualquer previsão dificilmente será maior do que a da fonte menos precisa.
    As previsões de Segurança de Aplicações (AS) concentram-se nos riscos de AS que existem tanto nas versões originais quanto nas subsequentes da aplicação. A previsão de AS é a seguinte: o iniciador da previsão acredita que a aplicação subsequente possui um Nível de Confiança equivalente ao da aplicação original, mesmo que algumas das atividades de ASC indicadas pelo Nível de Confiança não sejam concluídas pela equipe do projeto; em vez disso, as atividades de ASC são substituídas por um PASR. Sem previsões, a única maneira de acreditar que níveis equivalentes de confiança estão presentes nas duas aplicações é realizar todas as atividades de todos os ASCs identificados pelo Nível de Confiança.
    O framework de previsão é uma técnica para obter garantia em uma aplicação e precisa ser considerado de forma holística junto a outras abordagens para alcançar essa garantia, como o Teste de Regressão, conforme definido nas normas ISO/IEC/IEEE 29119-1[1] e ISO/IEC 90003[2]. Este documento fornece eficiência de garantia para a confiança em segurança da aplicação. Essa eficiência tem um custo, pois algumas atividades dos ASCs enumerados no Nível de Confiança Esperado são substituídas por PASRs. O proprietário da aplicação deve estar ciente desse custo e tomar uma decisão de risco apropriada para aceitar o PASR com base no conselho do Comitê ONF.
    Sob a perspectiva da segurança da aplicação, o padrão, sem qualquer orientação do Comitê ONF e sem a aprovação do proprietário da aplicação, é que previsões não são permitidas. Sem previsões, a única forma de ter confiança equivalente nos “Níveis de Confiança” entre a aplicação original e a subsequente é que o Nível de Confiança Real seja o mesmo para ambas as aplicações.

    
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Estrutura de Previsão",descricao: `
      A definição de uma aplicação segura, conforme definido na ISO/IEC 27034-1, é quando o Nível de Confiança Real é igual ao Nível de Confiança Alvo. A estrutura de previsão não pode e não deve alterar a definição do Nível de Confiança Real. A estrutura de previsão adiciona o Nível de Confiança Esperado como um mecanismo para indicar a crença da equipe do projeto em relação às propriedades de segurança da aplicação subsequente.
      A estrutura de previsão inclui os seguintes conceitos:
a) Uma aplicação original em que o Nível de Confiança Real era igual ao Nível de Confiança Alvo, resultando, de acordo com a definição da ISO/IEC 27034-1, em uma aplicação segura.
b) Uma aplicação subsequente em que o Nível de Confiança Alvo contém um subconjunto do Nível de Confiança Real da aplicação original.
c) Uma análise de risco, documentada no PASR, explicando por que a aplicação subsequente não apresenta uma mudança substancial e como a execução de um ASC geraria o mesmo resultado que durante a execução das atividades de segurança e de medição de verificação na aplicação original.
d) Para a aplicação subsequente, uma afirmação de que a aplicação possui um Nível de Confiança Real e a crença de que o Nível de Confiança Esperado da aplicação subsequente é equivalente ao Nível de Confiança Real da aplicação original.

1) Existe documentação que demonstre que a aplicação subsequente possui um subconjunto do Nível de Confiança Real da aplicação original?
2) Há registros ou relatórios de análise de risco (PASR) que expliquem por que a aplicação subsequente não sofreu alterações substanciais que afetariam seu nível de segurança?
3) Pode-se apresentar provas de que a execução de um ASC na aplicação subsequente geraria o mesmo resultado que na aplicação original durante as atividades de verificação e segurança?
4) Há registros que comprovem que a equipe do projeto acredita que o Nível de Confiança Esperado da aplicação subsequente é equivalente ao Nível de Confiança Real da aplicação original?
5) Apresente evidências que podem ser apresentadas para comprovar que o Nível de Confiança Real da aplicação original estava igual ao Nível de Confiança Alvo?
`,
      obrigatorio:true,
    },
    {titulo:"2. Nível de Confiança Esperado", descricao:`

      Este documento acrescenta a definição de Nível de Confiança Esperado, que indica que a equipe do projeto não realiza as atividades de ASCs específicas, mas prevê que, se a equipe do projeto realizasse as atividades do ASC, os resultados seriam iguais aos da aplicação original.
      Para a versão 1.0, o Nível de Confiança Alvo era Azul e a aplicação implementou com sucesso os 6 ASCs, de modo que o Nível de Confiança Real foi Azul. Como esta foi a primeira instanciação da aplicação, não houve previsões nem Nível de Confiança Esperado.
      O Nível de Confiança Esperado é Azul, pois a equipe do projeto prevê que a realização das atividades dos 3 ASCs não é necessária para a versão 1.1. A equipe do projeto pode, então, afirmar que sabe que a aplicação é segura no Nível de Confiança Vermelho, e acredita que a aplicação é segura no Nível de Confiança Azul, uma vez que os ASCs restantes possuem um PASR associado.
      Um Nível de Confiança Esperado contém um Nível de Confiança Real, que é um subconjunto do Nível de Confiança Esperado, e os ASCs restantes que não estão contidos no Nível de Confiança Real possuem um PASR associado. Como resultado, isso complementa a definição de “aplicação segura”.

      Nível de confiança esperado no ONF

      O comitê do ONF estabelece as diretrizes para quando um PASR é apropriado para cada ASC na biblioteca de ASCs.
      Isto é intencional, pois usar os mesmos Níveis de Confiança permite que os adquirentes comparem versões da mesma aplicação com o mesmo Nível de Confiança. A diferença é que, se as duas versões tiverem o mesmo Nível de Confiança Real, o adquirente sabe que as versões são equivalentes, pois ambas completaram o mesmo ASC. Se a versão subsequente usar um Nível de Confiança Esperado, o adquirente sabe que o iniciador da previsão acredita que as duas versões são equivalentes, mas a evidência dessa equivalência é uma declaração de justificativa.

      Nível de Confiança Esperado no ANF

      Após a avaliação de risco de AS indicar que previsões são apropriadas e o proprietário da aplicação aprovar o uso das previsões, a equipe do projeto estabelece o ANF para a aplicação. A Figura 3 mostra o ANF para as versões 1.0 e 1.1.
      Para a versão 1.0, o Nível de Confiança Alvo e o Real no ANF são ambos Azul. Para a versão 1.1, o Nível de Confiança Alvo é Vermelho, o Real é Vermelho e o Esperado é Azul.
      Todos os ASCs identificados em um Nível de Confiança Esperado, incluindo aqueles com um PASR, podem ser verificados durante uma verificação de Segurança da Aplicação com uma auditoria de Segurança da Aplicação.

      Dados de ASC no ANF

      O Quadro Normativo da Aplicação (ANF) é o repositório de todos os dados associados ao Nível de Confiança Esperado de uma aplicação.
      O padrão, sem qualquer orientação do proprietário da aplicação, é que todas as atividades do ASC sejam realizadas e que predições não sejam permitidas.
      Para um ASC cujas atividades são executadas pela equipe do projeto, o ANF contém dados que fazem referência ao ASC e permitem a verificação e auditoria da execução pela equipe do projeto.
      Com uma predição, não há atividades, mas ainda existem dados que fazem referência ao ASC no ANF.

      1) Pode fornecer registros ou relatórios que comprovem que, para a versão 1.0 da aplicação, os 6 ASCs foram implementados com sucesso, resultando no Nível de Confiança Real Azul?
      2) Há documentação que demonstre que, para a versão 1.1, a equipe do projeto previu que a realização das atividades de 3 ASCs não era necessária, mantendo o Nível de Confiança Esperado Azul?
      3) Existe algum registro que comprove a associação de PASRs aos ASCs que não foram realizados no Nível de Confiança Esperado da versão 1.1?
      4) Pode apresentar documentos ou atas do comitê do ONF que indiquem quando é apropriado usar um PASR para cada ASC na biblioteca de ASCs?
      5) Há relatórios de auditoria ou registros de verificação que comprovem que todos os ASCs identificados no Nível de Confiança Esperado, incluindo os com PASR, foram revisados ou verificados durante uma auditoria de Segurança da Aplicação?

      `, obrigatorio: true
    },
    {titulo:"3. Previsão ", descricao:`

      Iniciador da previsão

      O iniciador da previsão é tipicamente a equipe do projeto sob a direção do proprietário da aplicação.
      A equipe, ao apresentar a avaliação de risco ao proprietário da aplicação (ISO/IEC 27034-1:2011, 7.3.3), indica que a aplicação subsequente não precisa executar certos ASCs. Após a revisão das diretrizes estabelecidas para predizer o ASC, definidas pelo comitê do ONF, o proprietário da aplicação aprova o Nível de Confiança Real, que não contém os ASCs previstos, e o uso do Nível de Confiança Esperado, que contém os ASCs previstos.



      `, obrigatorio: true,
    },
    {titulo:"3.1 Circunstâncias da previsão", descricao: `

      Circunstância típica

        O aspecto de circunstância é uma razão pela qual existe uma aplicação subsequente. O aspecto de circunstância é um fator importante na avaliação de risco. As circunstâncias para aplicações subsequentes são variadas, mas incluem, sem se limitar a:

        a) Nova funcionalidade: Adicionar nova funcionalidade, dependendo da arquitetura da aplicação, pode resultar em grandes seções da aplicação que não precisam de verificação. Se não houver repetição da verificação, então previsões podem ser uma alternativa.

        b) Correções de bugs:

          1 - Corrigir bugs normalmente foca em mudanças em que muitas funções da aplicação não necessitam de re-verificação. Se não houver repetição da verificação, então previsões podem ser uma alternativa.

          2 - Expansão dos contextos alvo: A funcionalidade da aplicação permanece a mesma, mas agora os tipos de ameaças e os ambientes suportados se expandem. Este tipo de mudança na aplicação pode representar uma alteração menor ou uma reescrita massiva de partes substanciais da aplicação.

      Relação com o nível de confiança

        A suposição, feita tanto pelo iniciador da previsão quanto pelo consumidor da previsão, é de que o Nível de Confiança é consistente entre versões da aplicação. Embora normalmente seja verdadeiro, existem circunstâncias em que há o desejo de alterar o Nível de Confiança entre versões. Os exemplos a seguir fornecem sugestões de como a equipe do projeto responde às mudanças nos Níveis de Confiança.

        a) O Nível de Confiança da versão 1.0 é insuficiente para mitigar as ameaças identificadas.
          A primeira resposta da equipe do projeto será selecionar um novo Nível de Confiança que possua ASCs adicionais que mitiguem as ameaças identificadas. Para cada novo ASC, não há possibilidade de previsão, pois não existem resultados anteriores para referência no PASR. Portanto, a equipe do projeto executa todos os novos ASCs.
          É provável que o novo Nível de Confiança contenha ASCs que já estavam presentes no Nível de Confiança anterior. A equipe do projeto, seguindo a avaliação de risco de AS, pode determinar que previsões são apropriadas para os ASCs executados na aplicação original. Os ASCs resultantes teriam um PASR referenciando as atividades no ANF da aplicação original.
          Essa situação é análoga a encontrar uma vulnerabilidade na aplicação original; a resposta é alterar os ASCs para mitigar a vulnerabilidade. A aplicação nunca executou os novos ASCs. Portanto, previsões não são permitidas.
      
      Consumidor da previsão

        Enquanto o iniciador da previsão pode fazer qualquer alegação que desejar sobre a transferência de reivindicações de segurança, o consumidor da previsão é o árbitro final da previsão. Se o consumidor da previsão aceitar o Relatório do Nível de Confiança Esperado, então ele estará aceitando a avaliação de risco em relação às mudanças e concordando com a equipe do projeto que as alterações na aplicação subsequente não são substanciais.
        O iniciador da previsão não pode obrigar o consumidor da previsão a aceitar o Relatório do Nível de Confiança Esperado. O consumidor da previsão, por meio de sua própria decisão de risco utilizando os fundamentos fornecidos, pode aceitar apenas o Nível de Confiança Real. Isso implica, certamente, que quaisquer alegações preditivas feitas em relação à aplicação original não se transferem para a aplicação subsequente de acordo com o consumidor da previsão.
        Para aceitar um Relatório de Nível de Confiança Esperado, alguns consumidores da previsão podem exigir evidências adicionais, diferentes fundamentos de justificativa ou uma infinidade de outros tipos de revisão. É muito provável que esses requisitos adicionais do consumidor da previsão não tenham sido previstos quando o proprietário da aplicação aprovou o uso das previsões. Portanto, é comum que os consumidores da previsão deixem de considerar um ponto de dados que, para eles, é crítico e que afeta sua decisão de risco em relação ao Relatório de Nível de Confiança Esperado. Embora possa haver o desejo por parte da equipe do projeto de fornecer os dados faltantes, pode ser impossível gerar esses dados adicionais muito tempo depois que a aplicação concluiu seu desenvolvimento. Portanto, os consumidores da previsão que possuem requisitos especiais de dados devem tornar esses requisitos visíveis para seus fornecedores de aplicação, de maneira que os iniciadores da previsão estejam melhor preparados para gerar os dados necessários para que esses consumidores da previsão tenham um nível suficiente de confiança no Nível de Confiança Esperado.


      `,obrigatorio: true,
    }
    ],
  },
  
  
 
 
  // ... resto da estrutura permanece igual
];


const STORAGE_KEY = "iso27034_questionario_v1";

// --- rest of the file: copy the same implementation used in iso27001/questionario.js ---
// DOM refs
const indiceEl = document.getElementById("indiceNorma");
const tituloEl = document.getElementById("tituloSecao");
const conteudoEl = document.getElementById("conteudoSecao");
const secaoContainer = document.getElementById("secaoContainer"); // optional for animation
const btnSalvar = document.getElementById("btnSalvar");
const btnNext = document.getElementById("btnProximo");
const btnPrev = document.getElementById("btnAnterior");

if (!indiceEl || !tituloEl || !conteudoEl) {
  console.error("IDs esperados não encontrados: indiceNorma, tituloSecao, conteudoSecao");
}

// state
let _indexMap = [];           // maps list index -> {i, sub}
let current = null;           // {i, sub}
let savedState = loadAllSaved();
let autoSaveInterval = null;

// ---------- build index ----------
function buildIndex() {
  indiceEl.innerHTML = "";
  _indexMap = [];
  secoes.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "indice-item";
    li.textContent = s.titulo;
    li.dataset.i = i;
    li.dataset.sub = -1;
    li.addEventListener("click", onIndexClick);
    indiceEl.appendChild(li);
    _indexMap.push({ i, sub: null });

    if (Array.isArray(s.sub) && s.sub.length) {
      s.sub.forEach((subObj, si) => {
        const liSub = document.createElement("li");
        liSub.className = "indice-item subnivel";
        liSub.textContent = subObj.titulo;
        liSub.dataset.i = i;
        liSub.dataset.sub = si;
        liSub.addEventListener("click", onIndexClick);
        indiceEl.appendChild(liSub);
        _indexMap.push({ i, sub: si });
      });
    }
  });
}

// ---------- index click ----------
function onIndexClick(ev) {
  const i = Number(this.dataset.i);
  const sub = this.dataset.sub === "-1" ? null : Number(this.dataset.sub);
  selectSection(i, sub, this);
}

// ---------- select section ----------
function selectSection(i, sub = null, clickedLi = null) {
  // mark active
  document.querySelectorAll("#indiceNorma .indice-item").forEach(n => n.classList.remove("active"));
  if (clickedLi) clickedLi.classList.add("active");
  else {
    // compute item index and mark
    for (let idx = 0; idx < _indexMap.length; idx++) {
      const m = _indexMap[idx];
      if (m.i === i && m.sub === sub) {
        const nodes = document.querySelectorAll("#indiceNorma .indice-item");
        if (nodes[idx]) nodes[idx].classList.add("active");
        break;
      }
    }
  }

  current = { i, sub };
  renderCurrentSection();
  markCurrentForAutoSave();
}

// ---------- render section ----------
function renderCurrentSection() {
  const { i, sub } = current;
  const sec = secoes[i];
  const titulo = sub !== null ? (sec.sub[sub].titulo || sec.titulo) : sec.titulo;
  const descricao = sub !== null ? (sec.sub[sub].descricao || "") : (sec.descricao || "");

  tituloEl.textContent = titulo;

  // build extras inputs HTML
  let extrasHtml = "";
  if (Array.isArray(sec.camposExtras) && sec.camposExtras.length) {
    extrasHtml += `<div class="extras">`;
    sec.camposExtras.forEach((c, idx) => {
      extrasHtml += `<label>${c}</label><input class="campoExtra" data-idx="${idx}" placeholder="${c}">`;
    });
    extrasHtml += `</div>`;
  }

  // html: dropdown conformidade + obs container (hidden by default)
  conteudoEl.innerHTML = `
    ${ descricao ? `<p class="descricao">${descricao}</p>` : "" }

    <div class="form-row">
      <label>Conformidade</label>
      <select id="conformidadeSelect">
        <option value="SIM">SIM</option>
        <option value="SIM_OBS">SIM com observações</option>
        <option value="NAO">NÃO</option>
      </select>
    </div>

    <div id="obsContainer" style="display:none; margin-top:10px;">
      <label>Observações (exigir se não estiver em conformidade)</label>
      <textarea id="campoTexto" rows="5" placeholder="Descreva aqui..."></textarea>
    </div>

    <div style="margin-top:10px;">
      <label>Anexar arquivo (opcional)</label>
      <input type="file" id="campoArquivo">
    </div>

    ${extrasHtml}

    <div style="margin-top:8px;color:#94a3b8;font-size:13px"><em>Alterações são salvas automaticamente (localStorage).</em></div>
  `;

  // attach events for dropdown behavior
  const select = document.getElementById("conformidadeSelect");
  const obs = document.getElementById("obsContainer");

  select.addEventListener("change", () => {
    if (select.value === "SIM") obs.style.display = "none";
    else obs.style.display = "block";
  });

  // load saved values for this section
  loadSavedForCurrent();

  // apply animation
  if (secaoContainer) {
    secaoContainer.classList.remove("fade");
    void secaoContainer.offsetWidth;
    secaoContainer.classList.add("fade");
  }
}

// ---------- persistence (localStorage) ----------
function loadAllSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Erro parsing storage:", e);
    return {};
  }
}

function loadSavedForCurrent() {
  const key = getCurrentKey();
  const data = savedState[key];
  if (!data) return;
    const txt = document.getElementById("campoTexto");
  if (txt && data.texto) txt.value = data.texto;
    const extras = document.querySelectorAll(".campoExtra");
  if (extras && data.extras) extras.forEach((el, idx) => el.value = data.extras[idx] || "");
    const select = document.getElementById("conformidadeSelect");
  if (select && data.conformidade) select.value = data.conformidade;
  // show obs if necessary
    const obs = document.getElementById("obsContainer");
  if (obs && select) obs.style.display = (select.value === "SIM") ? "none" : "block";
  // file cannot be repopulated due to browser security
}

function saveCurrentSection() {
  if (!current) return;
  const key = getCurrentKey();
  const textoEl = document.getElementById("campoTexto");
  const texto = textoEl ? textoEl.value.trim() : "";
  const extrasEls = document.querySelectorAll(".campoExtra");
  const extras = extrasEls ? Array.from(extrasEls).map(e => e.value) : [];
  const select = document.getElementById("conformidadeSelect");
  const conformidade = select ? select.value : "SIM";
  const fileInput = document.getElementById("campoArquivo");
  const arquivoName = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0].name : null;

  // validation: if required and conformidade != SIM, obs must be present
  const sec = secoes[current.i];
  const isSub = current.sub !== null;
  const obrig = isSub ? (sec.sub[current.sub] && sec.sub[current.sub].obrigatorio) : sec.obrigatorio;
  if (obrig && conformidade !== "SIM" && texto === "") {
    // still allow save as draft but warn the user
    // For stricter validation you could block and show message
    console.warn("Seção obrigatória com conformidade != SIM salva sem observações (é recomendável preencher).");
  }

  savedState[key] = {
    texto,
    extras,
    conformidade,
    arquivo: arquivoName,
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  } catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
  }
}

// helper key
function getCurrentKey() {
  return current.sub !== null ? `${current.i}_${current.sub}` : `${current.i}`;
}

// ---------- autosave ----------
function setupAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    if (current) saveCurrentSection();
  }, 5000);
}

// ---------- buttons ----------
function setupButtons() {
  if (btnSalvar) {
    btnSalvar.addEventListener("click", () => {
      if (!current) return alert("Nenhuma seção selecionada.");
      saveCurrentSection();
      alert("Seção salva.");
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx >= 0 && idx < _indexMap.length - 1) selectByListIndex(idx + 1);
    });
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx > 0) selectByListIndex(idx - 1);
    });
  }
}

// ---------- helpers for list <-> mapping ----------
function findCurrentListIndex() {
  if (!current) return -1;
  for (let k = 0; k < _indexMap.length; k++) {
    const m = _indexMap[k];
    if (m.i === current.i && m.sub === current.sub) return k;
  }
  return -1;
}

function selectByListIndex(listIdx) {
  const mapping = _indexMap[listIdx];
  if (!mapping) return;
  const nodes = document.querySelectorAll("#indiceNorma .indice-item");
  if (nodes[listIdx]) nodes[listIdx].click();
}

// ---------- init ----------
function init() {
  savedState = loadAllSaved();
  buildIndex();
  // select first item if exists
  if (_indexMap.length) {
    // click first element in the list
    const firstNode = document.querySelectorAll("#indiceNorma .indice-item")[0];
    if (firstNode) firstNode.click();
  }
  setupButtons();
  setupAutoSave();
  console.log("ISO 27001 questionnaire initialized. STORAGE_KEY:", STORAGE_KEY);
}

// expose mark for autosave when needed (internal)
function markCurrentForAutoSave() {
  window._currentSection = current;
}

// build _indexMap after buildIndex runs, but buildIndex populates _indexMap so it's fine
// Also populate _indexMap according to buildIndex implementation:
(function patchIndexMapAfterBuild() {
  const originalBuild = buildIndex;
  buildIndex = function() {
    originalBuild();
    // rebuild _indexMap correctly (already done inside buildIndex), so no-op
  };
})();

document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "../dashboard.html";
});

// run
init();

// auditoria/static/dashboard.js
document.querySelectorAll('.card-option').forEach(card => {
  card.addEventListener('click', () => {
    const iso = card.dataset.id;
    if (iso === '27034') {
      window.location.href = '/questionario/';
    }
  });
});