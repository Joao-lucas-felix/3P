# Sprint 10

## Objetivo

Aprofundar a subpagina `concepts/math` com uma primeira explicacao sobre raciocinio matematico antes do codigo.

## Alteracao minima esperada

- ajustar os testes da pagina `math`;
- trocar o placeholder por uma abertura curta sobre formulas, propriedades e interpretacao matematica;
- manter a ponte com o repositorio de exercicios.

## Valor entregue

Esta sprint introduz uma pagina que ajuda o estudante a perceber quando a chave do problema esta na ideia matematica.

## Teste a criar ou ajustar antes da implementacao

- teste validando o titulo e a introducao da pagina;
- teste validando referencia a formula, numero, divisibilidade ou raciocinio matematico;
- teste validando uma orientacao de pratica.

## Evidencia de falha esperada antes de implementar

- a pagina ainda nao comunica o foco matematico do conceito;
- os testes devem falhar por falta do novo texto.

## Implementacao esperada

- adicionar uma abertura curta sobre pensamento matematico;
- incluir um bloco minimo explicando como usar os exercicios;
- manter a mudanca enxuta e verificavel.

## Documentacao da execucao

Ao concluir a sprint, registrar:

- quais testes foram ajustados primeiro;
- qual conteudo minimo foi inserido;
- como a pagina conecta teoria e pratica;
- o que ainda ficou para iteracoes futuras.

## Criterio de conclusao

- `concepts/math` possui conteudo introdutorio proprio;
- os testes da sprint passam;
- o escopo da entrega permaneceu pequeno.

## Registro de execucao

- testes ajustados primeiro em `src/app/pages/concepts/concept-detail-pages.spec.ts` para validar a nova abertura e a orientacao de pratica da pagina `math`;
- a falha esperada apareceu porque a subpagina ainda usava apenas o layout compartilhado, sem secoes proprias sobre raciocinio matematico;
- o conteudo minimo inserido em `src/app/pages/concepts/pages/math/math.ts` adiciona uma abertura sobre formulas, propriedades e relacoes entre valores;
- a pagina agora conecta teoria e pratica ao orientar a leitura de formulas, divisibilidade e outros padroes numericos antes da implementacao;
- iteracoes futuras ainda podem aprofundar exemplos de problemas classicos e estrategias matematicas mais especificas.
