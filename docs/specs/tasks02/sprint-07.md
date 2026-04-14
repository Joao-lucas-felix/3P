# Sprint 07

## Objetivo

Aprofundar a subpagina `concepts/lists` com uma introducao minima sobre colecoes e percurso de valores.

## Alteracao minima esperada

- ajustar os testes da pagina `lists`;
- substituir o placeholder principal por conteudo curto sobre armazenamento e percurso;
- manter o link para exercicios com contexto de estudo.

## Valor entregue

Esta sprint inaugura a camada de estruturas de dados da trilha com uma pagina ja util para consulta inicial.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a introducao da pagina;
- teste validando referencia a varios valores, indice ou percurso;
- teste validando uma chamada de pratica orientada.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao explica o que o estudante encontrara em listas;
- os testes devem falhar por falta da estrutura pedagogica esperada.

## Implementacao esperada

- adicionar uma abertura curta sobre colecoes;
- incluir um bloco minimo de pratica;
- manter a implementacao alinhada ao mesmo modelo das sprints anteriores.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes mudaram antes do codigo;
- qual conteudo minimo foi escrito;
- como o link de exercicios foi apresentado;
- quais proximos refinamentos foram adiados.

## Criterio de conclusao

- `concepts/lists` possui conteudo introdutorio real;
- os testes da sprint passam;
- a pagina continua amigavel para iniciantes.

## Registro de execucao

- testes adicionados em `concept-detail-pages.spec.ts` para validar a abertura propria da pagina `lists` e a orientacao de pratica com indice e percurso;
- a falha inicial confirmou que `concepts/lists` ainda mostrava apenas a estrutura generica da pagina;
- a pagina `lists` recebeu duas secoes novas com explicacao sobre guardar varios valores em uma colecao e como praticar acesso por indice e percurso;
- o bloco de pratica guiada existente foi mantido para preservar a ligacao com o repositorio de exercicios;
- a implementacao ficou restrita a `lists`, sem alterar o conteudo das demais subpaginas;
- suite relevante executada ao final com sucesso em modo Test First.
