# Sprint 01

## Objetivo

Criar a rota e a pagina base de `exercises`, deixando a aplicacao pronta para receber a experiencia de exercicios.

## Alteracao minima esperada

- ajustar os testes de rotas;
- adicionar a rota `exercises`;
- criar a pagina inicial com abertura curta e estrutura base.

## Valor entregue

Esta sprint estabelece o ponto de entrada da trilha de exercicios sem depender ainda do volume real de dados.

## Teste a criar ou ajustar antes da implementacao

- teste validando a existencia da rota `exercises`;
- teste validando o titulo da pagina;
- teste validando a abertura pedagogica da experiencia.

## Evidencia de falha esperada antes de implementar

- a rota ainda nao existe;
- os testes devem falhar porque a pagina de exercicios ainda nao foi criada.

## Implementacao esperada

- criar componente da pagina `exercises`;
- integrar com as rotas existentes;
- manter o layout coerente com o tema atual.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- qual pagina base foi criada;
- qual abertura minima foi adicionada;
- o que ficou para a sprint seguinte.

## Criterio de conclusao

- `exercises` existe como rota;
- a pagina base renderiza corretamente;
- os testes da sprint passam.

## Registro de execucao

- testes ajustados primeiro em `src/app/app.routes.spec.ts` e `src/app/pages/exercises/exercises.spec.ts` para validar a rota `exercises` e a abertura minima da pagina;
- a falha esperada apareceu porque a rota ainda nao existia e o componente `Exercises` ainda nao havia sido criado;
- a implementacao minima adicionou a rota em `src/app/app.routes.ts`, criou a pagina base em `src/app/pages/exercises/exercises.ts` e ligou a navbar ao novo caminho;
- a pagina base introduz a trilha de exercicios e prepara a experiencia expansivel que sera desenvolvida nas proximas sprints;
- a sprint seguinte fica focada em contrato de dados para subcategorias e exercicios.
