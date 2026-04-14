# Sprint 06

## Objetivo

Redesenhar a página de exercícios dentro da nova identidade visual.

## Alteração mínima esperada

- ajustar testes da página `exercises`;
- rever abertura, ritmo visual, cards expansíveis e blocos de apoio;
- preservar a lógica de navegação já validada.

## Valor entregue

Esta sprint faz a área de prática conversar visualmente com a nova home e com os conceitos.

## Teste a criar ou ajustar antes da implementação

- teste validando nova abertura da página de exercícios;
- teste validando nova apresentação dos grupos expansíveis;
- teste validando permanência da navegabilidade com muitos itens.

## Evidência de falha esperada antes de implementar

- a página ainda reflete a direção anterior;
- os testes devem falhar pela falta do redesign.

## Implementação esperada

- redesenhar a página de exercícios;
- manter cards expansíveis utilizáveis;
- preservar o texto pedagógico.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- como a área de exercícios foi redesenhada;
- como a navegação continuou clara;
- o que ficou para refinamento global.

## Critério de conclusão

- `exercises` segue a nova identidade;
- a UX continua controlada com alto volume;
- os testes da sprint passam.

## Registro de execução

- os testes foram ajustados primeiro em `src/app/pages/exercises/exercises.spec.ts` e `src/app/pages/exercises/components/exercise-subcategory/exercise-subcategory.spec.ts`, exigindo nova abertura, bloco de orientação e cards expansíveis com hierarquia visual mais forte;
- a falha esperada foi confirmada antes da implementação com `4` testes quebrando, ligados à ausência da nova estrutura visual da página e dos grupos;
- a página `src/app/pages/exercises/exercises.ts` foi redesenhada com hero, painel curto de uso, resumo da cobertura e uma grade mais controlada para muitos grupos;
- o componente `src/app/pages/exercises/components/exercise-subcategory/exercise-subcategory.ts` foi refinado para combinar com a nova direção visual sem alterar a lógica de expansão;
- a navegação continuou clara porque os grupos seguem recolhidos por padrão e os links para o repositório foram preservados;
- o que ficou para refinamento global: responsividade fina, pequenos ajustes de ritmo visual entre páginas e revisão final do conjunto;
- verificação final:
  - `npm test -- --watch=false --include src/app/pages/exercises/exercises.spec.ts --include src/app/pages/exercises/components/exercise-subcategory/exercise-subcategory.spec.ts`
  - `11 passed`
