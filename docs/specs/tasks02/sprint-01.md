# Sprint 01

## Objetivo

Criar a base estrutural das subpaginas de `concepts`, deixando cada conceito com rota propria e pagina minima renderizavel.

## Alteracao minima esperada

- adicionar as nove rotas filhas de `concepts`;
- criar a base minima das nove paginas;
- exibir titulo, introducao curta e link contextualizado para exercicios;
- manter a navegacao previsivel entre a pagina principal de conceitos e as subpaginas.

## Valor entregue

Esta sprint tira o PRD 02 do campo apenas especulativo e cria a infraestrutura minima para que o conteudo seja aprofundado depois, uma pagina por vez.

## Teste a criar ou ajustar antes da implementacao

- teste de rotas validando os slugs `basics`, `conditionals`, `loops`, `decomposition`, `lists`, `matrices`, `strings`, `math` e `ad-hoc`;
- teste de renderizacao minima para cada subpagina;
- teste garantindo que cada pagina identifica corretamente o conceito e exibe um link de referencia ao repositorio.

## Evidencia de falha esperada antes de implementar

- as rotas ainda nao existem;
- as paginas ainda nao podem ser carregadas;
- os testes devem falhar por rota ausente ou componente inexistente.

## Implementacao esperada

- registrar as rotas filhas em `app.routes`;
- criar componentes standalone minimos para cada pagina;
- reutilizar layout, navbar, footer e padroes ja existentes;
- manter placeholder estrutural sem aprofundar o conteudo.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes estruturais foram criados ou ajustados;
- quais rotas foram adicionadas;
- quais componentes base foram criados;
- qual estrategia de reutilizacao foi aplicada.

## Criterio de conclusao

- as nove subpaginas existem e podem ser acessadas;
- os testes estruturais da sprint passam;
- o visual atual da aplicacao foi preservado.

## Registro de execucao

- testes adicionados em `app.routes.spec.ts` para validar as nove rotas filhas de `concepts`;
- testes adicionados em `concept-detail-pages.spec.ts` para validar renderizacao minima, identificacao do conceito e link contextualizado de cada subpagina;
- rotas dedicadas criadas para `basics`, `conditionals`, `loops`, `decomposition`, `lists`, `matrices`, `strings`, `math` e `ad-hoc`;
- componente compartilhado de pagina base criado para evitar duplicacao estrutural entre as nove subpaginas;
- dados dos conceitos extraidos para um contrato compartilhado reutilizado pela pagina principal de `concepts` e pelas subpaginas;
- links minimos para abrir a pagina de cada conceito adicionados na trilha principal;
- suite relevante executada ao final com sucesso em modo Test First.
