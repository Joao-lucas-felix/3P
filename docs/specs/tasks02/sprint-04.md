# Sprint 04

## Objetivo

Aprofundar a subpagina `concepts/conditionals` com uma explicacao inicial sobre decisoes e regras.

## Alteracao minima esperada

- ajustar os testes da pagina `conditionals`;
- trocar o placeholder por um primeiro bloco de conteudo sobre comparacoes e caminhos possiveis;
- manter o link para exercicios com orientacao de uso.

## Valor entregue

Esta sprint transforma a pagina de condicao em uma referencia inicial de estudo, em vez de apenas uma rota vazia.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a introducao do conceito;
- teste validando a presenca de uma explicacao sobre regras, comparacoes ou escolhas;
- teste validando uma chamada para pratica com o repositorio.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao diferencia placeholder de conteudo real;
- os testes devem falhar por falta da abertura especifica de condicao.

## Implementacao esperada

- inserir uma abertura curta explicando quando usar condicoes;
- adicionar uma secao minima mostrando o que observar nos exercicios;
- manter escopo pequeno, sem cobrir casos avancados.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram alterados primeiro;
- qual conteudo minimo foi introduzido;
- como a pratica foi conectada ao conceito;
- qual parte do aprofundamento ainda ficou pendente.

## Criterio de conclusao

- `concepts/conditionals` possui conteudo inicial proprio;
- os testes da sprint passam;
- a pagina preserva clareza para iniciantes.

## Registro de execucao

- testes adicionados em `concept-detail-pages.spec.ts` para validar a abertura propria da pagina `conditionals` e a orientacao de leitura dos exercicios;
- a falha inicial confirmou que `concepts/conditionals` ainda exibia apenas a estrutura generica da pagina;
- a pagina `conditionals` recebeu duas secoes novas com explicacao sobre quando usar condicoes e o que observar nos exercicios;
- o bloco de pratica guiada existente foi mantido, preservando a ligacao com o repositorio de exercicios;
- a implementacao ficou restrita a `conditionals`, sem alterar o conteudo das demais subpaginas;
- suite relevante executada ao final com sucesso em modo Test First.
