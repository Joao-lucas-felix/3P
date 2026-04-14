# Sprint 05

## Objetivo

Mapear o primeiro lote real de exercícios do repositório em subcategorias reais.

## Alteração mínima esperada

- ajustar testes de dados e renderização;
- substituir exercícios fictícios por um primeiro conjunto real;
- validar nome, descrição e link de alguns itens reais.

## Valor entregue

Esta sprint inicia a ligação concreta entre a interface e o repositório de resoluções.

## Teste a criar ou ajustar antes da implementação

- teste validando a presença de subcategorias reais;
- teste validando itens reais de exercício;
- teste validando links não vazios para os exercícios mapeados.

## Evidência de falha esperada antes de implementar

- a página ainda depende de dados mínimos ou de exemplo;
- os testes devem falhar pela falta do mapeamento real.

## Implementação esperada

- inserir o primeiro lote real de dados;
- manter o escopo pequeno, com poucos grupos bem validados;
- documentar critérios de descrição curta.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais grupos reais entraram primeiro;
- como nomes e descrições foram montados;
- quais links foram validados;
- o que ainda falta mapear.

## Critério de conclusão

- a página exibe um primeiro lote real de exercícios;
- os testes da sprint passam;
- a estratégia de mapeamento fica clara para os próximos lotes.

## Registro de execução

- os primeiros testes ajustados foram `src/app/pages/exercises/exercises.data.spec.ts` e `src/app/pages/exercises/exercises.spec.ts`, exigindo nomes e links reais em vez de exemplos mínimos;
- os grupos reais inseridos nesta sprint foram `Conceitos Básicos` e `Estruturas de Condição`;
- os nomes foram montados a partir dos diretórios reais do repositório e as descrições curtas foram escritas em português para resumir a tarefa principal de cada exercício;
- os links validados nesta sprint incluem caminhos reais como `01_CONCEITOS_BASICOS/1000HelloWorld`, `01_CONCEITOS_BASICOS/1003SomaSimples`, `02_ESTRUTURAS_DE_CONDICAO/1013Maior` e `02_ESTRUTURAS_DE_CONDICAO/1038lanche`;
- ainda falta expandir o mapeamento para os demais exercícios dessas duas subcategorias e depois avançar para os grupos seguintes da trilha.
