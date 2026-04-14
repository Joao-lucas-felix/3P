# Sprint 06

## Objetivo

Aprofundar a subpagina `concepts/decomposition` com uma primeira explicacao sobre dividir problemas em etapas.

## Alteracao minima esperada

- ajustar os testes da pagina `decomposition`;
- trocar o placeholder por um bloco curto sobre organizacao do raciocinio;
- manter o contexto pedagogico do link para exercicios.

## Valor entregue

Esta sprint introduz um conceito importante de organizacao mental sem aumentar demais o escopo tecnico da pagina.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e o conceito de decomposicao;
- teste validando uma explicacao sobre quebrar problemas em partes menores;
- teste validando um bloco de pratica ou proximo passo.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao apresenta a ideia central de decompor um problema;
- os testes devem falhar por falta do conteudo esperado.

## Implementacao esperada

- inserir uma abertura curta sobre etapas e valores intermediarios;
- adicionar uma orientacao minima para leitura dos exercicios;
- evitar aprofundamento excessivo nesta etapa.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes guiaram a implementacao;
- qual incremento textual foi entregue;
- como a pagina conecta conceito e pratica;
- quais lacunas ficaram para evolucao futura.

## Criterio de conclusao

- `concepts/decomposition` possui abertura pedagogica propria;
- os testes da sprint passam;
- o escopo da mudanca permaneceu pequeno e verificavel.

## Registro de execucao

- testes adicionados em `concept-detail-pages.spec.ts` para validar a abertura propria da pagina `decomposition` e a orientacao de leitura dos exercicios;
- a falha inicial confirmou que `concepts/decomposition` ainda exibia apenas a estrutura generica da pagina;
- a pagina `decomposition` recebeu duas secoes novas com explicacao sobre quebrar problemas em partes menores e como observar etapas e valores intermediarios;
- o bloco de pratica guiada existente foi mantido para preservar a ligacao com o repositorio de exercicios;
- a implementacao ficou restrita a `decomposition`, sem alterar o conteudo das demais subpaginas;
- suite relevante executada ao final com sucesso em modo Test First.
