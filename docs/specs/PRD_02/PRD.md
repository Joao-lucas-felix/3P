# PRD 02 - Subpaginas de Concepts

## 1. Visao geral

Este PRD define a proxima fase da area `concepts` da SPA educacional 3P.

O foco desta fase e expandir a pagina atual de conceitos em uma colecao de subpaginas dedicadas, uma para cada conceito principal derivado dos diretorios do repositorio de referencia:

- [Projeto-3P / branch `new-sturcture`](https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture)

## 2. Problema

A pagina `concepts` ja apresenta a trilha de conceitos, mas ainda funciona como uma camada introdutoria. O estudante ainda nao possui um espaco proprio para aprofundar cada tema em uma rota dedicada, com contexto, explicacao, organizacao de conteudo e ligacao explicita com os exercicios daquele conceito.

## 3. Objetivo do produto

Criar uma estrutura de subpaginas dentro de `concepts` que permita aprofundar cada conceito principal da trilha.

Os objetivos finais desta fase sao:

- criar uma rota dedicada para cada conceito principal;
- seguir um padrao consistente de URL em ingles;
- entregar inicialmente essas rotas com conteudo vazio ou placeholder estrutural;
- preparar um PRD individual para cada subpagina;
- organizar a execucao futura em sprints pequenas, com uma sprint por subpagina para derivar o conteudo a partir do repositorio de exercicios;
- adotar uma abordagem combinada de Spec First e Test First.

## 4. Escopo desta entrega

Esta entrega cobre:

- definicao da arquitetura de rotas das subpaginas;
- definicao dos slugs em ingles;
- definicao dos PRDs individuais por pagina;
- definicao da estrategia de implementacao faseada;
- preservacao do link do repositorio de referencia no contexto de especificacao.

Esta entrega nao cobre:

- implementacao completa do conteudo dessas subpaginas;
- escrita do texto final aprofundado de cada pagina;
- mudanca de tema visual;
- criacao de navegacao secundaria detalhada dentro de cada subpagina.

## 5. Fonte de referencia

As subpaginas devem ser baseadas nos diretorios principais do repositorio:

1. `01_CONCEITOS_BASICOS`
2. `02_ESTRUTURAS_DE_CONDICAO`
3. `03_ESTRUTURAS_DE_REPETICAO`
4. `04_DECOMPOSICAO`
5. `05_LISTAS`
6. `06_MATRIZES`
7. `07_STRINGS`
8. `08_MATEMATICA`
9. `09_AD_HOC`

Cada uma dessas pastas passa a originar uma subpagina dedicada em `concepts`.

## 6. Padrao de rotas

Cada subpagina deve seguir o padrao:

- `concepts/<nome-do-conceito-em-ingles>`

Mapa inicial de rotas:

1. `concepts/basics`
2. `concepts/conditionals`
3. `concepts/loops`
4. `concepts/decomposition`
5. `concepts/lists`
6. `concepts/matrices`
7. `concepts/strings`
8. `concepts/math`
9. `concepts/ad-hoc`

## 7. Objetivo imediato da implementacao futura

A primeira entrega de implementacao desta fase deve criar:

- as rotas dedicadas;
- a base de cada pagina;
- conteudo inicial vazio ou placeholder estrutural;
- navegacao suficiente para sustentar a evolucao futura.

O aprofundamento do conteudo deve vir depois, uma subpagina por sprint.

## 8. Abordagem de trabalho

### 8.1 Spec First

Antes de implementar cada pagina, deve existir um documento proprio descrevendo:

- objetivo da pagina;
- fonte conceitual;
- expectativas de conteudo;
- ligacao com exercicios;
- criterios de aceitacao.

### 8.2 Test First

Antes de implementar cada subpagina, deve-se:

- revisar os testes existentes;
- criar ou ajustar testes para a nova rota e estrutura esperada;
- confirmar a falha;
- implementar o menor incremento util;
- validar novamente a suite.

## 9. Requisitos funcionais

- Deve existir uma rota dedicada para cada um dos nove conceitos principais.
- Todas as rotas devem ficar sob `concepts/`.
- Cada rota deve usar o slug em ingles definido neste PRD.
- Cada rota deve renderizar uma pagina valida mesmo antes do conteudo aprofundado.
- Cada pagina deve preservar o contexto pedagogico do conceito correspondente.
- Cada pagina deve manter o link do repositorio de exercicios no contexto da experiencia.

## 10. Requisitos de UX

- As subpaginas devem preservar o tema visual atual.
- O usuario deve entender em qual conceito esta.
- O conteudo inicial pode ser enxuto, mas deve deixar claro que a pagina aprofundara aquele tema.
- A navegacao entre a pagina principal de `concepts` e as subpaginas deve ser previsivel na fase de implementacao.

## 11. Estrategia de entrega

Esta fase deve ser dividida em duas camadas:

### Camada 1

Entrega estrutural:

- criar todas as rotas;
- criar as paginas base;
- garantir testes de existencia e renderizacao minima.

### Camada 2

Entrega de conteudo:

- uma sprint por subpagina;
- derivacao do conteudo a partir do repositorio de exercicios;
- validacao progressiva do aprofundamento.

## 12. Ordem sugerida das futuras sprints de conteudo

1. `basics`
2. `conditionals`
3. `loops`
4. `decomposition`
5. `lists`
6. `matrices`
7. `strings`
8. `math`
9. `ad-hoc`

## 13. Criterios de aceitacao do PRD 02

- Existe um PRD mestre para a fase de subpaginas de `concepts`.
- Existe um PRD individual para cada uma das nove subpaginas.
- Cada PRD individual aponta para um conceito principal do repositorio de referencia.
- O padrao de URL em ingles esta definido.
- O objetivo imediato de implementacao estrutural esta documentado.
- A estrategia de Spec First e Test First esta explicitada.

## 14. Observacao final

Esta fase nao busca ainda completar o conteudo aprofundado de cada conceito. O objetivo primeiro e criar a base correta para que cada subpagina seja implementada em sequencia, com especificacao propria, testes proprios e evolucao incremental segura.
