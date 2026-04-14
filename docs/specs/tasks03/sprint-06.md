# Sprint 06

## Objetivo

Ampliar o mapeamento para mais subcategorias reais, mantendo a página navegável.

## Alteracao minima esperada

- ajustar testes para mais grupos;
- adicionar novos blocos reais de exercícios;
- preservar a página recolhida por padrão para evitar excesso visual.

## Valor entregue

Esta sprint expande a cobertura da página sem comprometer navegação e legibilidade.

## Teste a criar ou ajustar antes da implementacao

- teste validando mais subcategorias reais;
- teste validando aumento do total de exercicios mapeados;
- teste validando manutencao do comportamento expansivel.

## Evidencia de falha esperada antes de implementar

- a cobertura ainda não representa uma parte suficiente do repositório;
- os testes devem falhar pela ausência dos novos grupos.

## Implementacao esperada

- adicionar mais lotes reais;
- manter os dados organizados por subcategoria;
- evitar mudanças amplas fora do escopo.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quantas subcategorias novas entraram;
- qual foi o critério de expansão do mapeamento;
- como a página continuou navegável;
- o que ainda falta para cobertura principal.

## Criterio de conclusao

- a página cobre mais subcategorias reais;
- a UX continua controlada;
- os testes da sprint passam.

## Registro de execucao

- os testes ajustados primeiro foram `src/app/pages/exercises/exercises.data.spec.ts` e `src/app/pages/exercises/exercises.spec.ts`, exigindo quatro subcategorias reais e pelo menos vinte exercícios mapeados;
- entraram duas subcategorias novas nesta sprint: `Estruturas de Repetição` e `Decomposição`;
- o critério de expansão foi seguir a própria trilha pedagógica já existente na aplicação, adicionando os próximos grupos da sequência depois de `Conceitos Básicos` e `Estruturas de Condição`;
- a página continuou navegável porque todos os grupos permanecem recolhidos por padrão, com o mesmo componente expansível reutilizável e o mesmo espaçamento controlado entre cards;
- ainda falta expandir o mapeamento para `Listas`, `Matrizes`, `Strings`, `Matemática` e `Ad-Hoc`, além de ampliar a cobertura interna dos grupos já iniciados.
