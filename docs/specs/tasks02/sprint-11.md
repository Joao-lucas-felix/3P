# Sprint 11

## Objetivo

Aprofundar a subpagina `concepts/ad-hoc` com uma abertura minima sobre interpretacao de enunciado e simulacao de regras.

## Alteracao minima esperada

- ajustar os testes da pagina `ad-hoc`;
- substituir o placeholder principal por conteudo inicial sobre leitura cuidadosa e casos especificos;
- manter a orientacao de pratica ligada ao repositorio.

## Valor entregue

Esta sprint fecha a primeira rodada de aprofundamento do PRD 02, completando o conjunto minimo de subpaginas com conteudo inicial real.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a introducao da pagina;
- teste validando referencia a interpretacao, regras especificas ou simulacao;
- teste validando a chamada para exercicios e continuidade de estudo.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao apresenta o foco proprio de problemas ad-hoc;
- os testes devem falhar por ausencia da nova estrutura textual.

## Implementacao esperada

- escrever uma abertura curta sobre leitura cuidadosa do enunciado;
- adicionar um bloco minimo de pratica;
- manter a entrega pequena, sem tentar resolver toda a complexidade do tema.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram alterados antes do codigo;
- qual trecho do placeholder foi substituido;
- como a pagina orienta o estudante a usar os exercicios;
- quais refinamentos ainda podem acontecer depois da primeira rodada.

## Criterio de conclusao

- `concepts/ad-hoc` possui conteudo introdutorio real;
- os testes da sprint passam;
- a primeira fase de aprofundamento das subpaginas fica completa.

## Registro de execucao

- testes ajustados primeiro em `src/app/pages/concepts/concept-detail-pages.spec.ts` para validar a abertura e a orientacao de pratica da pagina `ad-hoc`;
- a falha esperada apareceu porque a subpagina ainda usava apenas o layout compartilhado, sem secoes proprias sobre leitura e simulacao;
- o placeholder foi complementado em `src/app/pages/concepts/pages/ad-hoc/ad-hoc.ts` com uma abertura sobre interpretacao cuidadosa do enunciado;
- a pagina orienta o estudante a usar os exercicios com simulacao de casos pequenos e observacao de regras especificas;
- refinamentos futuros ainda podem incluir exemplos mais variados de estrategias ad-hoc e armadilhas comuns de interpretacao.
