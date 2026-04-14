# Sprint 12

## Objetivo

Revisar todo o conteúdo gerado em `concepts` para corrigir ortografia, acentuação, cedilhas e consistência lógica em português brasileiro.

## Alteração mínima esperada

- ajustar os testes que ainda validavam textos sem acentuação;
- corrigir títulos, descrições, chamadas de prática e blocos pedagógicos com grafia inadequada;
- preservar a estrutura visual e o fluxo já existente.

## Valor entregue

Esta sprint melhora a clareza de leitura e deixa a experiência educacional mais correta e acolhedora para estudantes iniciantes em português brasileiro.

## Teste a criar ou ajustar antes da implementação

- testes da página `concepts` com títulos e textos acentuados;
- testes das páginas detalhadas com nomes de conceitos, introduções e seções corrigidas;
- testes da navegação reutilizável com os títulos atualizados.

## Evidência de falha esperada antes de implementar

- os testes devem falhar porque várias páginas ainda exibiam textos como `Conceitos Basicos`, `Condicao`, `Matematica` e `repositorio de exercicios`;
- a validação também deve revelar trechos com grafia inconsistente entre lista, navegação e páginas internas.

## Implementação esperada

- corrigir o conteúdo compartilhado em `concept-pages.data.ts`;
- revisar o layout textual comum e as páginas específicas de conceitos;
- manter a entrega enxuta, sem reestilizar a aplicação.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes foram corrigidos primeiro;
- quais arquivos concentravam os principais problemas de linguagem;
- como a revisão foi aplicada sem alterar a estrutura visual;
- quais refinamentos textuais podem vir em uma próxima rodada.

## Critério de conclusão

- `concepts` e suas subpáginas exibem português brasileiro correto;
- os testes atualizados passam;
- a revisão textual preserva o comportamento já entregue nas sprints anteriores.

## Registro de execução

- testes ajustados primeiro em `src/app/pages/concepts/concepts.spec.ts`, `src/app/pages/concepts/concept-detail-pages.spec.ts` e `src/app/pages/concepts/components/concept-navigation/concept-navigation.spec.ts`;
- a falha esperada apareceu porque vários textos ainda estavam sem acentuação ou com grafia antiga, tanto na listagem quanto nas páginas detalhadas;
- a revisão principal foi aplicada em `src/app/pages/concepts/concept-pages.data.ts`, `src/app/pages/concepts/concepts.html`, `src/app/pages/concepts/components/concept-detail-page/concept-detail-page.ts` e nas páginas específicas de `concepts`;
- a estrutura visual foi preservada, com foco apenas em correção gramatical, acentos, cedilhas e consistência pedagógica;
- uma próxima rodada ainda pode revisar tom, fluidez e progressão didática mais fina entre os blocos.
