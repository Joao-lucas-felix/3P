﻿# Sprint 03

## Objetivo

Redesenhar a home com nova hierarquia de entrada e apelo visual mais forte.

## Alteração mínima esperada

- ajustar testes da home;
- reorganizar hero, blocos de apresentação e chamadas de navegação;
- tornar a página inicial mais memorável.

## Valor entregue

Esta sprint transforma a home em porta de entrada mais atraente para jovens programadores.

## Teste a criar ou ajustar antes da implementação

- teste validando nova abertura visual da home;
- teste validando hierarquia mais clara entre introdução e próximos passos;
- teste validando permanência das principais chamadas de navegação.

## Evidência de falha esperada antes de implementar

- a home ainda está presa à composição anterior;
- os testes devem falhar pela ausência da nova estrutura.

## Implementação esperada

- redesenhar hero da home;
- reorganizar seções de apoio;
- manter a linguagem educacional do projeto.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes falharam primeiro;
- como a home foi reorganizada;
- como o novo visual conversa com o público jovem;
- o que ficou preparado para conceitos.

## Critério de conclusão

- a home tem nova estrutura visual;
- a entrada no produto ficou mais forte;
- os testes da sprint passam.

## Registro de execução

- Ajuste preparatório registrado antes da implementação principal da sprint: a `navbar` da sprint-02 foi revertida para a versão visual anterior por feedback do usuário.
- O `footer` da sprint-02 foi mantido sem alterações.
- Testes ajustados primeiro em `src/app/pages/home/home.spec.ts` para exigir uma abertura mais forte, próximos passos claros e um fluxo de estudo para iniciantes.
- Falha inicial confirmada com `npm test -- --watch=false`: 3 testes falharam em `src/app/pages/home/home.spec.ts` por ausência da nova estrutura da home.
- A `home` foi reorganizada em três blocos principais: hero de entrada, próximos passos para conceitos e exercícios, e um fluxo curto de estudo.
- O novo visual reforça o apelo para jovens programadores com cards dark, destaque em ciano, blocos mais marcados e presença visual maior do mascote.
- As principais chamadas de navegação foram preservadas com links para `#/concepts` e `#/exercises`.
- Validação final executada com `npm test -- --watch=false`.
- Resultado final: `124 passed`.
