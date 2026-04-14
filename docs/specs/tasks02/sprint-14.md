# Sprint 14

## Objetivo

Adicionar exemplos guiados mínimos às páginas de `concepts` para reforçar a passagem da explicação para a prática.

## Alteração mínima esperada

- ajustar os testes para exigir um bloco curto de `Exemplo guiado` em cada página;
- inserir um exemplo simples e coerente com o conceito estudado;
- preservar o layout e o tom já definidos nas sprints anteriores.

## Valor entregue

Esta sprint deixa cada página mais concreta para iniciantes, mostrando um pequeno tipo de problema que ajuda a transformar a teoria em ação.

## Teste a criar ou ajustar antes da implementação

- teste genérico validando `Exemplo guiado` em todas as páginas de conceito;
- teste validando um trecho curto que identifique o tipo de exercício usado como exemplo;
- manutenção dos testes já existentes de introdução, prática e próximo passo.

## Evidência de falha esperada antes de implementar

- os testes devem falhar porque nenhuma página ainda exibe um bloco explícito de exemplo guiado;
- a falha também deve mostrar quais conceitos ainda não oferecem uma ponte concreta entre explicação e exercício.

## Implementação esperada

- inserir um bloco curto de `Exemplo guiado` em cada página de conceito;
- usar exemplos pequenos, legíveis e alinhados ao nível iniciante;
- manter a mudança enxuta, sem transformar a página em resolução completa de exercício.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes foram criados primeiro;
- quais exemplos mínimos foram escolhidos para cada conceito;
- como a mudança reforça a prática sem inflar o conteúdo;
- o que ainda pode ser aprofundado em iterações futuras.

## Critério de conclusão

- todas as páginas de `concepts` exibem `Exemplo guiado`;
- os exemplos são curtos e coerentes com o conceito;
- os testes atualizados passam.

## Registro de execução

- testes ajustados primeiro em `src/app/pages/concepts/concept-detail-pages.spec.ts` para validar `Exemplo guiado` e um trecho curto de cada exemplo;
- a falha esperada apareceu em todas as páginas porque o bloco de exemplo ainda não existia;
- os exemplos mínimos foram adicionados nas páginas de `basics`, `conditionals`, `loops`, `decomposition`, `lists`, `matrices`, `strings`, `math` e `ad-hoc`;
- a mudança reforça a leitura pedagógica ao mostrar rapidamente um tipo de exercício possível sem transformar a página em solução longa;
- uma próxima rodada ainda pode aprofundar esses exemplos em formato passo a passo ou com microdesafios ao final de cada página.
