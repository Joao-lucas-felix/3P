﻿# Sprint 04

## Objetivo

Redesenhar a página índice de conceitos.

## Alteração mínima esperada

- ajustar testes da página `concepts`;
- rever agrupamentos visuais, blocos de leitura e navegação;
- aproximar a página da nova identidade geral.

## Valor entregue

Esta sprint melhora a descoberta dos tópicos de estudo e reduz a sensação de lista plana.

## Teste a criar ou ajustar antes da implementação

- teste validando nova composição da página de conceitos;
- teste validando permanência dos grupos e links;
- teste validando maior clareza visual entre blocos.

## Evidência de falha esperada antes de implementar

- a página ainda usa a direção anterior;
- os testes devem falhar pela falta da nova organização.

## Implementação esperada

- redesenhar os grupos de conceitos;
- reorganizar títulos, descrições e blocos;
- manter o conteúdo atual.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- como a página índice foi reorganizada;
- como a leitura ficou mais clara;
- o que ficou pronto para as páginas internas.

## Critério de conclusão

- `concepts` segue a nova direção visual;
- a navegação por conceitos continua simples;
- os testes da sprint passam.

## Registro de execução

- Testes ajustados primeiro em `src/app/pages/concepts/concepts.spec.ts` para exigir uma abertura mais forte, grupos identificáveis e cards internos mais distintos.
- Falha inicial confirmada com `npm test -- --watch=false`: 5 testes falharam por ausência da nova composição visual da página `concepts`.
- A página índice foi reorganizada em quatro camadas visuais: hero de entrada, guia de uso, grupos de conceitos com cards internos e fechamento com continuidade de estudo.
- Os grupos `Fundamentos`, `Estruturas e Manipulação` e `Resolução de Problemas` foram preservados, mas ganharam blocos internos mais marcados e leitura mais escaneável.
- Os links para páginas internas e para o repositório de exercícios foram mantidos.
- A nova composição reduz a sensação de lista plana e aproxima `concepts` da direção visual da nova home.
- Validação final executada com `npm test -- --watch=false`.
- Resultado final: `126 passed`.
