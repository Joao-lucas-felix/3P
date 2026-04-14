﻿# Sprint 02

## Objetivo

Redesenhar navegação global e rodapé dentro da nova direção visual.

## Alteração mínima esperada

- ajustar testes de navbar e footer;
- renovar hierarquia, contraste e composição dessas áreas;
- manter links e comportamento existentes.

## Valor entregue

Esta sprint melhora a primeira impressão e a coerência do sistema antes do redesign das páginas centrais.

## Teste a criar ou ajustar antes da implementação

- teste validando nova estrutura da navbar;
- teste validando nova apresentação do footer;
- teste validando permanência dos links principais.

## Evidência de falha esperada antes de implementar

- navbar e footer ainda seguem a direção visual anterior;
- os testes devem falhar pela ausência da nova estrutura.

## Implementação esperada

- redesenhar navbar;
- redesenhar footer;
- manter navegação simples e clara.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- como navbar e footer foram redesenhados;
- como a nova identidade passou a aparecer logo na entrada;
- o que ficou preparado para a home.

## Critério de conclusão

- navbar e footer seguem a nova direção;
- a navegação continua funcional;
- os testes da sprint passam.

## Registro de execução

- Testes ajustados primeiro em `src/app/core/components/navbar/navbar.spec.ts` e `src/app/core/components/footer/footer.spec.ts`.
- Falha inicial confirmada com `npm test -- --watch=false`: 5 testes falharam por ausência da nova estrutura visual de `navbar` e `footer`.
- Os links principais foram centralizados em `src/app/core/interfaces/links.ts` para manter consistência entre navegação superior e rodapé.
- A `navbar` foi redesenhada com shell glassmorphism dark, identidade pixelada reforçada, chips de navegação no desktop e painel mobile expansível.
- O `footer` foi redesenhado com bloco principal mais denso visualmente, navegação complementar real e orientação curta de estudo para iniciantes.
- Os links principais foram preservados com os destinos `#/home`, `#/concepts`, `#/exercises` e `#`.
- Validação final executada com `npm test -- --watch=false`.
- Resultado final: `121 passed`.
