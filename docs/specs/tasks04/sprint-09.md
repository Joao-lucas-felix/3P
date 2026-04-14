# Sprint 09

## Objetivo

Aumentar o contraste entre fundo e texto, escurecendo o tema sem alterar a estrutura visual.

## Alteração mínima esperada

- ajustar testes para exigir fundos mais escuros nas áreas principais;
- escurecer o shell visual das páginas centrais;
- preservar a identidade atual, a tipografia pixelada e a composição já definida.

## Valor entregue

Esta sprint melhora a legibilidade geral e reforça a sensação dark do projeto sem reabrir o redesign.

## Teste a criar ou ajustar antes da implementação

- teste validando shell mais escuro na `home`;
- teste validando abertura mais escura em `concepts`;
- teste validando card principal mais escuro em `exercises`;
- teste validando rodapé com contraste reforçado.

## Evidência de falha esperada antes de implementar

- os principais containers ainda usam opacidades mais claras;
- os testes devem falhar enquanto o escurecimento não for aplicado.

## Implementação esperada

- escurecer os fundos principais;
- manter contraste confortável com os textos atuais;
- não alterar o layout.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes falharam primeiro;
- quais áreas foram escurecidas;
- como o contraste melhorou sem mudar a estrutura;
- que refinamentos podem ser feitos depois.

## Critério de conclusão

- o tema está visualmente mais escuro;
- a leitura continua clara;
- os testes da sprint passam.

## Registro de execução

- os testes foram ajustados primeiro em `src/app/app.spec.ts`, `src/app/pages/home/home.spec.ts`, `src/app/pages/concepts/concepts.spec.ts`, `src/app/pages/exercises/exercises.spec.ts` e `src/app/core/components/footer/footer.spec.ts`;
- a falha esperada apareceu em `home`, `concepts`, `exercises` e `footer`, porque os blocos principais ainda usavam fundos mais claros do que a sprint pedia;
- as áreas escurecidas foram:
  - `src/app/pages/home/home.html`
  - `src/app/pages/concepts/concepts.html`
  - `src/app/pages/exercises/exercises.ts`
  - `src/app/core/components/footer/footer.html`
- a consistência melhorou porque os blocos centrais agora usam opacidades mais densas, mantendo o mesmo layout e a mesma linguagem visual;
- refinamentos possíveis depois:
  - revisar contraste fino de textos secundários;
  - escurecer também alguns cards internos em uma nova rodada, se desejar;
- verificação final:
  - `npm test -- --watch=false --include src/app/app.spec.ts --include src/app/pages/home/home.spec.ts --include src/app/pages/concepts/concepts.spec.ts --include src/app/pages/exercises/exercises.spec.ts --include src/app/core/components/footer/footer.spec.ts`
  - `41 passed`
