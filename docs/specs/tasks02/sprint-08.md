# Sprint 08

## Objetivo

Aprofundar a subpagina `concepts/matrices` com uma explicacao inicial sobre linhas, colunas e leitura em grade.

## Alteracao minima esperada

- ajustar os testes da pagina `matrices`;
- trocar o placeholder por um bloco minimo sobre organizacao em tabela;
- manter a chamada para exercicios contextualizada.

## Valor entregue

Esta sprint prepara uma entrada segura para um tema que costuma parecer mais complexo para iniciantes.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a abertura da pagina;
- teste validando referencia a linhas, colunas ou uso de dois indices;
- teste validando a orientacao de pratica.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao apresenta a ideia de matriz de forma pedagogica;
- os testes devem falhar por ausencia dos novos textos.

## Implementacao esperada

- escrever uma abertura curta sobre grades e posicao;
- adicionar um bloco simples de como observar os exercicios;
- manter o codigo pequeno e reutilizavel.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- qual conteudo minimo foi entregue;
- como a explicacao foi simplificada para iniciantes;
- quais partes ainda dependem de expansao futura.

## Criterio de conclusao

- `concepts/matrices` possui abertura real e contextualizada;
- os testes da sprint passam;
- o escopo continua minimo e claro.

## Registro de execucao

- testes adicionados em `concept-detail-pages.spec.ts` para validar a abertura propria da pagina `matrices` e a orientacao de pratica com linhas, colunas e dois indices;
- a falha inicial confirmou que `concepts/matrices` ainda exibia apenas a estrutura generica da pagina;
- a pagina `matrices` recebeu duas secoes novas com explicacao sobre leitura em grade e como praticar posicoes e uso de dois indices;
- o bloco de pratica guiada existente foi mantido para preservar a ligacao com o repositorio de exercicios;
- a implementacao ficou restrita a `matrices`, sem alterar o conteudo das demais subpaginas;
- suite relevante executada ao final com sucesso em modo Test First.
