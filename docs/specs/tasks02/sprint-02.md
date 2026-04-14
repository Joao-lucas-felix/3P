# Sprint 02

## Objetivo

Criar um componente de navegacao reutilizavel para as subpaginas de `concepts`, com comportamento expansivel e destaque visual do conceito atual.

## Alteracao minima esperada

- criar ou ajustar os testes do novo componente de navegacao;
- introduzir um componente reutilizavel semelhante ao `navbar`, com background blur;
- exibir uma lista expansivel de conceitos;
- destacar visualmente o conceito atual com consistencia em relacao ao tema existente.

## Valor entregue

Esta sprint cria a base de navegacao interna das subpaginas, reduzindo retrabalho nas proximas entregas e melhorando a continuidade do estudo.

## Teste a criar ou ajustar antes da implementacao

- teste validando a renderizacao do componente de navegacao nas subpaginas de conceitos;
- teste validando o comportamento expansivel da lista de conceitos;
- teste validando o destaque visual do conceito atual;
- teste validando a reutilizacao do componente em mais de uma pagina de conceito.

## Evidencia de falha esperada antes de implementar

- o componente ainda nao existe;
- as subpaginas ainda nao possuem navegacao secundaria reutilizavel;
- os testes devem falhar por componente ausente ou estrutura nao renderizada.

## Implementacao esperada

- criar um componente pequeno e reutilizavel para navegacao entre conceitos;
- aplicar visual consistente com o projeto atual, incluindo background blur;
- permitir expansao para revelar a lista de conceitos;
- destacar o conceito atual sem alterar o tema da aplicacao.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes do componente foram criados ou ajustados;
- em quais paginas o componente passou a ser usado;
- como a expansao da lista funciona;
- como o conceito atual passou a ser destacado.

## Criterio de conclusao

- o componente de navegacao existe e e reutilizavel;
- a lista de conceitos pode ser expandida;
- o conceito atual recebe destaque visual consistente;
- os testes da sprint passam;
- o visual atual da aplicacao foi preservado.

## Registro de execucao

- testes adicionados em `concept-navigation.spec.ts` para validar renderizacao, expansao da lista e destaque do conceito atual;
- testes das paginas de detalhe ajustados para validar a presenca do componente reutilizavel nas subpaginas;
- componente `ConceptNavigation` criado em `src/app/pages/concepts/components/concept-navigation`;
- navegacao expansivel baseada nos conceitos compartilhados adicionada com visual alinhado ao `navbar`, incluindo background blur;
- destaque visual do conceito atual implementado com `aria-current="page"` e estilo consistente com o tema existente;
- componente integrado ao `ConceptDetailPage`, ficando reutilizado automaticamente nas nove subpaginas de conceitos;
- suite relevante executada ao final com sucesso em modo Test First.
