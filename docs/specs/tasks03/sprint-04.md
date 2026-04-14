# Sprint 04

## Objetivo

Extrair um componente reutilizável para subcategorias expansivas de exercícios.

## Alteracao minima esperada

- ajustar testes de componente;
- extrair a estrutura de expansão para um componente dedicado;
- manter a página principal mais limpa e escalável.

## Valor entregue

Esta sprint cria a base para multiplicar subcategorias sem duplicar lógica de UI.

## Teste a criar ou ajustar antes da implementacao

- teste validando renderização do título da subcategoria;
- teste validando expansão e recolhimento;
- teste validando renderização dos exercícios recebidos por entrada.

## Evidencia de falha esperada antes de implementar

- a interação ainda está acoplada à implementação inicial;
- os testes devem falhar por ausência do componente reutilizável.

## Implementacao esperada

- criar componente de subcategoria expansível;
- receber dados por `input`;
- reutilizar o componente na pagina `exercises`.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- qual extração foi realizada;
- como a pagina passou a depender do componente reutilizavel;
- o que fica pronto para receber muitos grupos.

## Criterio de conclusao

- existe um componente reutilizável para subcategorias;
- a pagina `exercises` o utiliza;
- os testes da sprint passam.

## Registro de execucao

- os primeiros testes ajustados foram `src/app/pages/exercises/exercises.spec.ts`, exigindo grupos expansíveis em loop, e `src/app/pages/exercises/components/exercise-subcategory/exercise-subcategory.spec.ts`, criada para validar o componente dedicado;
- a extração realizada moveu toda a lógica de expansão e renderização dos exercícios para `src/app/pages/exercises/components/exercise-subcategory/exercise-subcategory.ts`;
- a página `src/app/pages/exercises/exercises.ts` passou a depender do componente reutilizável ao iterar pelas subcategorias e delegar a cada item sua própria interação;
- com isso, a base fica pronta para receber muitos grupos sem duplicar marcação, estado local e comportamento de abertura.
