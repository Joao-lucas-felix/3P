# Sprint 05

## Objetivo

Redesenhar a estrutura compartilhada das páginas internas de conceito.

## Alteração mínima esperada

- ajustar testes da estrutura compartilhada;
- rever layout de abertura, navegação e seções pedagógicas;
- manter o conteúdo já criado nas páginas.

## Valor entregue

Esta sprint dá unidade visual às páginas de aprofundamento sem reescrever o conteúdo educacional.

## Teste a criar ou ajustar antes da implementação

- teste validando nova casca compartilhada das páginas internas;
- teste validando permanência da navegação entre conceitos;
- teste validando continuidade dos blocos pedagógicos.

## Evidência de falha esperada antes de implementar

- as páginas internas ainda seguem a estrutura anterior;
- os testes devem falhar pela ausência do novo layout compartilhado.

## Implementação esperada

- redesenhar o componente compartilhado;
- reaproveitar o sistema atual de navegação;
- manter objetivo, explicação, prática e próximo passo visíveis.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes falharam primeiro;
- qual estrutura compartilhada foi redesenhada;
- como a consistência entre páginas melhorou;
- o que ficou pronto para exercícios.

## Critério de conclusão

- as páginas de conceito seguem uma nova estrutura comum;
- o conteúdo continua legível;
- os testes da sprint passam.

## Registro de execução

- os testes foram ajustados primeiro em `src/app/pages/concepts/concept-detail-pages.spec.ts`, exigindo uma hero compartilhada, um card de prática destacado e uma área comum para o conteúdo projetado;
- a falha esperada foi confirmada antes da implementação com `27` testes quebrando, todos ligados à ausência da nova casca visual nas páginas internas;
- o componente compartilhado `src/app/pages/concepts/components/concept-detail-page/concept-detail-page.ts` foi redesenhado com abertura mais forte, bloco lateral de ritmo de estudo, card de prática mais claro e uma seção única para agrupar os blocos pedagógicos já existentes;
- a navegação entre conceitos foi preservada sem reescrever o conteúdo das páginas individuais;
- a consistência entre páginas melhorou porque todas agora seguem a mesma hierarquia visual para introdução, prática e aprofundamento;
- verificação final:
  - `npm test -- --watch=false --include src/app/pages/concepts/concept-detail-pages.spec.ts`
  - `63 passed`
