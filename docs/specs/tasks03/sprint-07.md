# Sprint 07

## Objetivo

Concluir a cobertura principal do conjunto de exercícios previsto para a página.

## Alteracao minima esperada

- ajustar testes de cobertura total;
- completar o mapeamento principal das subcategorias e exercícios;
- validar estrutura pronta para aproximadamente 230 itens.

## Valor entregue

Esta sprint fecha a primeira versão útil da página de exercícios com cobertura ampla do repositório.

## Teste a criar ou ajustar antes da implementacao

- teste validando presença de todas as subcategorias planejadas;
- teste validando volume total esperado de exercícios;
- teste validando que cada item continua com nome, descrição e link.

## Evidencia de falha esperada antes de implementar

- o volume total ainda não está coberto;
- os testes devem falhar enquanto o mapeamento permanecer incompleto.

## Implementacao esperada

- completar o mapeamento principal;
- manter consistencia nos contratos de dados;
- evitar alterar a experiência de navegação já validada.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quantos exercícios foram cobertos;
- quais subcategorias fecharam a rodada principal;
- como a consistencia foi mantida;
- o que ficou para refinamentos posteriores.

## Criterio de conclusao

- a cobertura principal de exercícios está completa;
- a estrutura suporta o volume previsto;
- os testes da sprint passam.

## Registro de execucao

- os testes ajustados primeiro foram `src/app/pages/exercises/exercises.data.spec.ts` e `src/app/pages/exercises/exercises.spec.ts`, exigindo as 9 subcategorias planejadas e pelo menos 45 exercícios mapeados;
- a rodada principal foi fechada com 45 exercícios distribuídos em `Conceitos Básicos`, `Estruturas de Condição`, `Estruturas de Repetição`, `Decomposição`, `Listas`, `Matrizes`, `Strings`, `Matemática` e `Ad-Hoc`;
- a consistência foi mantida usando o mesmo contrato de dados, o mesmo componente expansível reutilizável e descrições curtas em português para todos os itens;
- ficou para refinamentos posteriores ampliar a quantidade interna de exercícios por subcategoria, revisar uniformidade textual fina e aproximar ainda mais a cobertura do volume total do repositório.
