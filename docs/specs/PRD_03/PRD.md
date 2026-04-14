# PRD 03

## Titulo

Pagina de exercicios com listagem expansivel por subcategorias

## Contexto

A aplicacao ja possui uma trilha de conceitos para estudo introdutorio. O proximo passo e oferecer uma pagina unica de exercicios que ajude o estudante a navegar pelo repositorio de resolucoes sem se perder em uma lista longa e pouco contextualizada.

O repositorio de exercicios possui aproximadamente 230 exercicios distribuidos em subcategorias. A experiencia precisa transformar esse volume em uma navegacao clara, progressiva e amigavel para iniciantes.

## Problema

Hoje, o estudante nao conta com uma pagina dedicada dentro da SPA para:

- visualizar os exercicios organizados por subcategoria;
- entender rapidamente o que cada exercicio pede;
- acessar com facilidade o link correspondente no repositorio;
- navegar por uma grande quantidade de exercicios sem sobrecarga visual.

## Objetivo do produto

Criar uma pagina unica de exercicios com containers expansivos ao clique, onde cada subcategoria possa ser aberta para revelar sua lista de exercicios. Cada exercicio deve apresentar:

- nome do exercicio mapeado do repositorio;
- breve descricao do que o exercicio pede;
- link para a pagina do exercicio no repositorio.

## Publico-alvo

- iniciantes em programacao;
- estudantes usando a trilha de conceitos como base;
- pessoas que precisam localizar exercicios por assunto com pouca friccao.

## Resultado esperado

Ao entrar em `exercises`, o usuario consegue:

1. identificar rapidamente as subcategorias disponiveis;
2. expandir apenas a area que deseja explorar;
3. localizar um exercicio por leitura simples da lista;
4. entender, em poucas linhas, o que o exercicio pede;
5. abrir o link correspondente no repositorio.

## Escopo funcional

### Deve ter

- uma rota dedicada para a pagina `exercises`;
- uma unica pagina com containers expansivos por subcategoria;
- um contrato de dados para representar subcategoria e exercicios;
- renderizacao da lista de exercicios dentro de cada subcategoria;
- nome, descricao curta e link por exercicio;
- interface preparada para aproximadamente 230 itens sem mostrar tudo expandido ao mesmo tempo;
- reaproveitamento do tema visual atual;
- conteudo textual consistente com a experiencia educacional da aplicacao.

### Nao deve ter nesta fase

- busca textual global;
- filtros complexos;
- tags avancadas;
- paginacao;
- alteracao visual ampla do sistema;
- importacao automatica do repositorio em tempo real.

## Requisitos de conteudo

Cada item de exercicio deve conter:

- `title`: nome visivel do exercicio;
- `summary`: descricao breve e clara sobre a tarefa;
- `href`: link para a pagina do exercicio;
- `subcategory`: grupo ao qual o exercicio pertence.

Cada subcategoria deve conter:

- titulo;
- descricao opcional curta;
- lista de exercicios.

### Regra linguistica obrigatoria

- todo o conteudo visivel ao usuario deve ser escrito em portugues brasileiro correto;
- usar acentos e cedilhas corretamente em titulos, descricoes, textos de apoio e chamadas de navegacao;
- evitar grafias simplificadas sem acentuacao quando o texto final for exibido na interface;
- revisar consistencia gramatical e ortografica como parte obrigatoria da entrega.

## Requisitos de UX

- a pagina deve priorizar leitura linear e navegacao simples;
- os containers devem ser expansivos ao clique;
- o estado recolhido deve reduzir poluicao visual;
- o estudante deve entender que cada grupo representa um conjunto praticavel de exercicios;
- a pagina deve funcionar bem em desktop e mobile;
- a hierarquia visual deve preservar o tema atual da aplicacao.

## Requisitos tecnicos

- seguir metodologia test first;
- introduzir contratos de dados antes de renderizar volume alto;
- favorecer componentes pequenos e reutilizaveis;
- manter separacao entre dados, layout e interacao;
- permitir expansao incremental de subcategorias e exercicios sem reescrever a estrutura.

## Estrategia de implementacao

Para reduzir risco, a entrega deve ser dividida em sprints pequenas:

1. criar a estrutura base da rota e da pagina de exercicios;
2. criar o contrato de dados de subcategorias e exercicios;
3. implementar o primeiro container expansivel validando o padrao;
4. consolidar um componente reutilizavel para subcategoria expansivel;
5. carregar os primeiros grupos reais do repositorio;
6. expandir gradualmente a cobertura ate todas as subcategorias previstas;
7. revisar clareza pedagogica, consistencia textual e navegabilidade.

## Criterios de aceite

- existe uma rota `exercises` funcional;
- a pagina renderiza containers expansivos por subcategoria;
- cada exercicio exibe nome, descricao curta e link;
- a estrutura suporta aproximadamente 230 exercicios sem abrir tudo de uma vez;
- os testes cobrem rota, renderizacao, expansao e contratos de dados;
- a experiencia visual permanece coerente com o restante da aplicacao.

## Metodologia obrigatoria

Cada sprint desta task deve:

- revisar testes existentes antes de alterar codigo;
- criar ou ajustar testes primeiro;
- executar testes e confirmar a falha esperada;
- implementar o menor incremento util;
- executar novamente os testes relevantes;
- registrar a entrega em documentacao objetiva.

Tambem deve:

- revisar o texto visivel para garantir portugues brasileiro correto com acentos e cedilhas.

## Dependencias e premissas

- os links de exercicios serao mapeados a partir do repositorio de resolucoes ja existente;
- os nomes e descricoes podem ser montados incrementalmente durante a task;
- o volume total aproximado de 230 exercicios sera distribuido por subcategorias em dados locais da aplicacao.

## Riscos

- alto volume de exercicios pode incentivar uma entrega grande demais;
- descricoes podem ficar inconsistentes sem um contrato claro;
- mapear todo o repositorio de uma vez aumenta risco de erro e dificulta validacao.

## Mitigacao

- implementar por lotes pequenos e testaveis;
- validar primeiro o padrao com poucos grupos;
- centralizar os dados em estruturas reutilizaveis;
- revisar texto e navegacao em sprints separadas.
