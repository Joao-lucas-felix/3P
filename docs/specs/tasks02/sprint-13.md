# Sprint 13

## Objetivo

Refinar o encadeamento pedagógico entre as páginas de `concepts`, deixando mais claro o próximo passo de estudo após cada bloco.

## Alteração mínima esperada

- ajustar os testes das páginas que ainda não encerravam a explicação com um próximo passo;
- adicionar uma ponte curta entre o conceito atual e o próximo conceito da trilha;
- manter o conteúdo introdutório já existente, sem reestruturar a página inteira.

## Valor entregue

Esta sprint melhora a continuidade do estudo e ajuda iniciantes a entender o que vem depois de cada conceito, reduzindo a sensação de páginas isoladas.

## Teste a criar ou ajustar antes da implementação

- testes validando `Próximo passo` nas páginas que ainda não tinham esse fechamento;
- testes validando a menção ao conceito seguinte na trilha;
- testes confirmando que a explicação prática continua presente junto com a nova ponte pedagógica.

## Evidência de falha esperada antes de implementar

- várias páginas devem falhar por ainda não exibirem `Próximo passo`;
- os testes também devem falhar por falta de referência explícita ao próximo conceito ou à continuidade de estudo.

## Implementação esperada

- completar as páginas pendentes com um bloco curto de próximo passo;
- conectar `conditionals` a `loops`, `lists` a `matrices`, `matrices` a `strings`, `strings` a `math`, `math` a `ad-hoc` e `ad-hoc` ao retorno para exercícios;
- preservar o tema visual e a estrutura já consolidada.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais páginas estavam sem fechamento pedagógico;
- quais testes foram ajustados primeiro;
- como a continuidade entre blocos foi reforçada;
- quais refinamentos de tom ainda podem acontecer depois.

## Critério de conclusão

- as páginas pendentes exibem `Próximo passo`;
- a sequência de estudo fica mais explícita para iniciantes;
- os testes atualizados passam sem regressão.

## Registro de execução

- testes ajustados primeiro em `src/app/pages/concepts/concept-detail-pages.spec.ts` para validar a presença de `Próximo passo` e a ponte para o conceito seguinte;
- a falha esperada apareceu nas páginas `conditionals`, `lists`, `matrices`, `strings`, `math` e `ad-hoc`, que ainda não fechavam o ciclo pedagógico completo;
- os blocos mínimos de continuidade foram adicionados nessas páginas sem alterar o layout nem o conteúdo introdutório já entregue;
- a trilha agora fica mais linear e acolhedora, com orientação explícita sobre para onde seguir após cada conceito;
- uma próxima rodada ainda pode aprofundar exemplos guiados e microexplicações práticas dentro de cada bloco.
