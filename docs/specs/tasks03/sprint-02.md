# Sprint 02

## Objetivo

Criar o contrato de dados para subcategorias e exercicios, preparando a estrutura que suportara aproximadamente 230 itens.

## Alteracao minima esperada

- ajustar testes do contrato de dados;
- introduzir tipos e estrutura compartilhada;
- manter apenas dados minimos iniciais para validacao.

## Valor entregue

Esta sprint reduz risco estrutural antes da entrada de volume alto de exercicios.

## Teste a criar ou ajustar antes da implementacao

- teste validando formato de subcategoria;
- teste validando formato de exercicio com `title`, `summary` e `href`;
- teste validando agrupamento de exercicios por subcategoria.

## Evidencia de falha esperada antes de implementar

- a aplicacao ainda nao possui um contrato compartilhado para exercicios;
- os testes devem falhar pela ausencia da estrutura.

## Implementacao esperada

- criar arquivo de dados compartilhados;
- definir tipos de subcategoria e exercicio;
- adicionar um conjunto inicial pequeno para servir de base.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram criados primeiro;
- qual contrato foi definido;
- como a estrutura prepara a expansao futura;
- o que ainda nao foi mapeado.

## Criterio de conclusao

- existe um contrato claro para os dados de exercicios;
- a estrutura suporta expansao incremental;
- os testes da sprint passam.

## Registro de execucao

- testes ajustados primeiro em `src/app/pages/exercises/exercises.spec.ts` e `src/app/pages/exercises/exercises.data.spec.ts` para validar o contrato de dados e a exibicao inicial das subcategorias;
- a falha esperada apareceu porque ainda nao existia um arquivo compartilhado com tipos e dados de exercicios;
- o contrato foi definido em `src/app/pages/exercises/exercises.data.ts` com tipos para subcategoria e exercicio, incluindo um conjunto inicial pequeno e verificavel;
- a pagina `exercises` passou a consumir essa estrutura e renderizar uma previa das subcategorias iniciais, preparando a expansao futura sem inflar a interface;
- o mapeamento real amplo dos exercicios ficou para as proximas sprints, quando a estrutura expansivel for implementada e os lotes reais forem crescendo.
