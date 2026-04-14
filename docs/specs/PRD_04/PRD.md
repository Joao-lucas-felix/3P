# PRD 04

## Título

Nova direção visual para a SPA educacional

## Contexto

A aplicação já possui estrutura funcional para estudo de conceitos e exploração de exercícios. O próximo passo é testar uma direção visual nova, mais marcante e mais atraente para jovens programadores, sem perder clareza pedagógica.

Até aqui, a interface foi construída com foco em estrutura, navegação e conteúdo. Agora faz sentido abrir uma rodada dedicada de redesign para:

- renovar a atmosfera visual do produto;
- reorganizar a hierarquia dos blocos de conteúdo;
- tornar a experiência mais memorável e convidativa;
- preservar a sensação de projeto educacional acessível e progressivo.

## Diretriz principal desta rodada

Esta rodada autoriza mudança visual ampla da interface.

Pode mudar:

- cores;
- gradientes;
- superfícies e contrastes;
- distribuição dos blocos;
- espaçamentos;
- hierarquia visual;
- composição das páginas;
- seções de apresentação;
- ritmo de navegação;
- aparência de cards, áreas de destaque e fundos.

Deve manter:

- tema dark;
- uso da fonte pixelada como parte da identidade;
- caráter educacional do projeto;
- clareza de leitura;
- responsividade;
- navegação simples para iniciantes.

## Problema

Hoje a aplicação cumpre bem a função estrutural, mas ainda pode parecer visualmente conservadora demais para o público que queremos atrair. Falta uma linguagem visual mais forte, com mais presença, energia e intenção.

Os riscos atuais são:

- páginas corretas, mas pouco memoráveis;
- pouca diferenciação entre áreas de conteúdo;
- ausência de uma atmosfera visual mais empolgante;
- hierarquia visual ainda muito funcional e pouco expressiva.

## Objetivo do produto

Testar uma nova estrutura visual para o projeto inteiro, mantendo o tema dark e a fonte pixelada, mas com liberdade para reformular as telas de forma mais atraente para jovens programadores.

Essa nova direção deve:

- parecer mais intencional e contemporânea;
- gerar mais curiosidade e sensação de descoberta;
- continuar legível para estudo;
- valorizar conceitos, exercícios e progressão de aprendizagem;
- evitar visual genérico ou sem personalidade.

## Público-alvo

- iniciantes em programação;
- estudantes do ensino médio, técnico ou início da graduação;
- jovens que gostam de estética digital, experimental, arcade, terminal ou cultura maker;
- pessoas que se sentem mais motivadas quando a interface transmite energia e identidade.

## Resultado esperado

Ao abrir a aplicação, o usuário deve perceber:

1. uma identidade visual dark mais forte e coesa;
2. páginas com composição mais interessante e menos plana;
3. destaque mais claro para objetivos, estudo e prática;
4. navegação mais convidativa entre áreas do produto;
5. uma experiência visual mais jovem sem sacrificar a leitura.

## Escopo funcional

### Deve ter

- redesign visual da estrutura global da aplicação;
- nova organização visual das páginas principais;
- manutenção da fonte pixelada;
- manutenção do tema dark;
- revisão das superfícies, fundos, contrastes e destaques;
- adaptação do conteúdo a uma hierarquia visual nova;
- consistência entre home, conceitos e exercícios;
- preservação das rotas e funcionalidades já existentes.

### Não deve ter nesta fase

- mudança do propósito educacional do produto;
- remoção de páginas ou fluxos já entregues;
- substituição da fonte pixelada por outra identidade principal;
- mudança para tema claro;
- reescrita completa da lógica de dados sem necessidade;
- redesign desconectado da experiência mobile.

## Requisitos de conteúdo

Mesmo com liberdade visual, o conteúdo visível deve continuar:

- claro para iniciantes;
- progressivo;
- acolhedor;
- escrito em português brasileiro correto;
- organizado para leitura linear quando necessário.

### Regra linguística obrigatória

- todo o conteúdo visível deve usar português brasileiro correto;
- títulos, descrições, botões e textos auxiliares devem respeitar acentos e cedilhas;
- a revisão ortográfica faz parte obrigatória desta task;
- nenhuma instrução de implementação pode aparecer na interface final.

## Requisitos de UX

- a experiência deve continuar clara em desktop e mobile;
- a nova estética deve ser dark e expressiva;
- a fonte pixelada deve permanecer como assinatura visual;
- a navegação deve continuar simples, mesmo com mais personalidade visual;
- o conteúdo educacional não pode ser ofuscado por excesso de ornamento;
- home, conceitos e exercícios devem parecer partes do mesmo sistema visual;
- a interface deve parecer atraente para jovens programadores, sem cair em visual genérico;
- motion, se existir, deve apoiar a leitura e não distrair.

## Requisitos visuais

- a direção visual pode explorar contrastes mais fortes, fundos mais ricos e composições mais ousadas;
- a paleta deve continuar dark, mas não precisa seguir as cores atuais;
- a tipografia pixelada deve continuar presente nas áreas-chave da experiência;
- componentes podem ganhar aparência nova, desde que o sistema continue coerente;
- os destaques visuais devem ajudar a orientar estudo, prática e navegação;
- evitar aparência “template” ou apenas trocar cores sem reorganizar a interface.

## Requisitos técnicos

- seguir metodologia test first;
- alterar testes antes da implementação visual correspondente;
- validar estrutura e comportamento por testes de componente e página;
- preservar componentes reutilizáveis sempre que possível;
- extrair componentes novos quando a repetição visual justificar;
- manter separação entre conteúdo, layout e contratos de dados.

## Estratégia de implementação

Para reduzir risco, a entrega deve ser dividida em sprints pequenas:

1. criar a base visual compartilhada da nova direção;
2. redesenhar navegação global e rodapé;
3. redesenhar a home com nova hierarquia de entrada;
4. redesenhar a página índice de conceitos;
5. redesenhar a estrutura compartilhada das páginas de conceito;
6. redesenhar a página de exercícios;
7. revisar responsividade, acessibilidade e motion;
8. revisar consistência final, clareza textual e acabamento visual.

## Critérios de aceite

- o projeto continua dark;
- a fonte pixelada continua integrada à identidade;
- as páginas principais apresentam nova estrutura visual;
- a experiência continua legível e navegável;
- a aplicação fica visualmente mais atraente para jovens programadores;
- os testes cobrem as alterações estruturais mais importantes;
- a coerência entre páginas melhora em vez de piorar.

## Metodologia obrigatória

Cada sprint desta task deve:

- revisar testes existentes antes de alterar código;
- criar ou ajustar testes primeiro;
- executar testes e confirmar a falha esperada;
- implementar o menor incremento visual útil;
- executar novamente os testes relevantes;
- registrar a entrega em documentação objetiva.

Também deve:

- revisar o texto visível para garantir português brasileiro correto com acentos e cedilhas.

## Dependências e premissas

- a base funcional atual de home, conceitos e exercícios será preservada;
- a nova rodada é prioritariamente visual e estrutural, não de lógica de negócio;
- o redesign deve aproveitar o que já existe sempre que isso não bloquear a nova direção;
- a validação será incremental, por página e por camada visual.

## Riscos

- redesign amplo demais pode quebrar consistência entre páginas;
- excesso de efeitos pode prejudicar leitura;
- mudar tudo de uma vez pode dificultar validação;
- a nova estética pode parecer chamativa, mas pouco útil pedagogicamente.

## Mitigação

- dividir a entrega em sprints pequenas;
- validar primeiro a estrutura compartilhada;
- revisar cada página com foco em leitura e hierarquia;
- manter a base funcional intacta enquanto a camada visual evolui;
- fechar a task com uma sprint final de consistência.
