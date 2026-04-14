# Sprint 01

## Objetivo

Criar a base visual compartilhada da nova direção do projeto.

## Alteração mínima esperada

- ajustar testes estruturais da aplicação;
- definir nova base de fundo, superfícies e contrastes;
- preparar a casca visual para receber o redesign das páginas.

## Valor entregue

Esta sprint cria o alicerce visual do restante da task, evitando redesign isolado página por página.

## Teste a criar ou ajustar antes da implementação

- teste validando nova estrutura visual global da aplicação;
- teste validando manutenção do tema dark;
- teste validando permanência da fonte pixelada nos pontos principais.

## Evidência de falha esperada antes de implementar

- a aplicação ainda usa a base visual anterior;
- os testes devem falhar pela ausência da nova estrutura compartilhada.

## Implementação esperada

- revisar fundo global e áreas-base;
- ajustar containers principais compartilhados;
- preservar o comportamento funcional atual.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes falharam primeiro;
- qual base visual compartilhada foi criada;
- como o tema dark foi preservado;
- o que ficou pronto para as próximas páginas.

## Critério de conclusão

- existe uma nova base visual consistente;
- o projeto continua dark;
- a identidade com fonte pixelada continua presente;
- os testes da sprint passam.

## Registro de execução

- Testes ajustados primeiro em `src/app/app.spec.ts` para exigir uma shell global com estrutura dark, camadas visuais compartilhadas e assinatura com fonte pixelada.
- Falha inicial confirmada com `npm test -- --watch=false`: 3 testes falharam em `src/app/app.spec.ts` por ausência da nova casca visual.
- Implementação mínima aplicada em `src/app/app.html`, `src/app/app.css`, `src/styles.css` e `src/app/app.ts`.
- A nova base visual compartilhada passou a incluir fundo dark com gradientes, grade sutil, moldura global e marca decorativa `3P` em fonte pixelada.
- O comportamento funcional foi preservado: o `router-outlet` continua sendo o ponto de entrada das páginas existentes.
- Validação final executada com `npm test -- --watch=false`.
- Resultado final: `115 passed`.
