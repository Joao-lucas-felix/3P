# Sprint 03

## Objetivo

Aprofundar a subpagina `concepts/basics` com o primeiro bloco de conteudo pedagogico real.

## Alteracao minima esperada

- ajustar os testes da pagina `basics`;
- substituir parte do placeholder por uma abertura pedagogica curta;
- manter o link para exercicios com contexto claro para iniciantes.

## Valor entregue

Esta sprint valida o modelo de aprofundamento das subpaginas usando o primeiro conceito da trilha.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a apresentacao do conceito de fundamentos;
- teste validando uma estrutura minima de leitura com objetivo, explicacao, pratica e proximo passo;
- teste validando o contexto do link para o repositorio de exercicios.

## Evidencia de falha esperada antes de implementar

- a pagina ainda contem apenas placeholder generico;
- a estrutura pedagogica ainda nao esta presente;
- os testes devem falhar por ausencia dos novos blocos esperados.

## Implementacao esperada

- adicionar uma abertura curta explicando o que o estudante aprende em fundamentos;
- incluir uma secao minima de pratica guiada;
- manter a implementacao pequena, sem expandir para outros conceitos.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes da pagina `basics` foram criados ou ajustados;
- qual trecho do placeholder foi substituido por conteudo real;
- como o link de pratica foi contextualizado;
- quais partes ainda ficaram para futuras iteracoes.

## Criterio de conclusao

- `concepts/basics` possui conteudo introdutorio real;
- os testes da sprint passam;
- a pagina continua consistente com o padrao visual e pedagogico.

## Registro de execucao

- testes adicionados em `concept-detail-pages.spec.ts` para validar objetivo, explicacao, pratica e proximo passo da pagina `basics`;
- a falha inicial confirmou que `concepts/basics` ainda exibia apenas a base generica sem os novos blocos pedagogicos;
- o layout compartilhado de pagina de conceito passou a aceitar projeção de conteudo para permitir aprofundamento incremental sem duplicar a estrutura completa;
- a pagina `basics` recebeu duas secoes novas com objetivo do passo, explicacao simples de como pensar no conceito e proximo passo de estudo;
- o bloco de pratica guiada existente foi preservado e continuou contextualizando o link para o repositorio de exercicios;
- o aprofundamento ficou restrito a `basics`, sem expandir mudancas de conteudo para as outras subpaginas nesta sprint;
- suite relevante executada ao final com sucesso em modo Test First.
