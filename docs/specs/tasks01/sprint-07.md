# Sprint 07

## Objetivo

Reorganizar a pagina de conceitos para reduzir o numero de cards, agrupando conceitos relacionados em blocos maiores e mais escaneaveis.

## Alteracao minima esperada

- diminuir a quantidade de cards visiveis na pagina;
- agrupar conceitos com relacao pedagogica clara;
- preservar os nove conceitos obrigatorios, agora distribuidos em grupos;
- manter a ponte entre conteudo teorico e pratica.

## Valor entregue

Esta sprint melhora a leitura da pagina, reduz fragmentacao visual e deixa a trilha mais organizada para quem esta comecando.

## Hipotese de reorganizacao

Os conceitos devem passar a ser agrupados em blocos maiores, por exemplo:

- Fundamentos:
  Conceitos Basicos, Estruturas de Condicao, Estruturas de Repeticao e Decomposicao.
- Estruturas e Manipulacao:
  Listas, Matrizes e Strings.
- Resolucao de Problemas:
  Matematica e Ad-Hoc.

Se durante a implementacao surgir uma agrupacao melhor, ela pode ser adotada desde que:

- reduza a quantidade de cards;
- mantenha clareza para iniciantes;
- preserve a progressao pedagogica.

## Teste a criar ou ajustar antes da implementacao

- teste que valida a reducao do numero de cards de conceitos;
- teste que valida a existencia dos grupos principais;
- teste que valida que todos os nove conceitos continuam visiveis dentro dos agrupamentos;
- teste que valida que cada grupo ainda possui chamadas para pratica;
- teste que valida que a pagina continua sem exibir instrucoes tecnicas como conteudo.

## Evidencia de falha esperada antes de implementar

- a pagina ainda exibe um card por conceito;
- os grupos ainda nao existem;
- os testes novos devem falhar antes da implementacao.

## Implementacao esperada

- reorganizar a modelagem da pagina para trabalhar com grupos de conceitos;
- reduzir a quantidade de cards sem perder o conteudo ja entregue;
- manter o tema visual atual;
- preservar clareza, progressao recomendada e links para exercicios e resolucoes.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- qual agrupamento foi adotado;
- quantos cards existiam antes e quantos passaram a existir depois;
- como os nove conceitos foram preservados dentro da nova organizacao;
- como a ponte para pratica continuou presente.

## Criterio de conclusao

- a quantidade de cards foi reduzida;
- os conceitos agora aparecem agrupados;
- os nove conceitos obrigatorios continuam presentes;
- a pagina continua clara para iniciantes;
- os testes da sprint passam.

## Registro de execucao

- os testes foram atualizados para validar agrupamentos em vez de um card por conceito;
- a pagina passou de nove cards de conceito para tres grupos principais;
- o agrupamento adotado foi Fundamentos, Estruturas e Manipulacao, e Resolucao de Problemas;
- os nove conceitos foram preservados como artigos internos dentro dos grupos;
- as chamadas para exercicios e resolucoes continuaram presentes em cada conceito;
- o tema visual atual foi mantido durante a reorganizacao.
