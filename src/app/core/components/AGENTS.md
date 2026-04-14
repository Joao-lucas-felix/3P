# AGENTS.md

## Papel desta area
- Esta area contem os componentes reutilizaveis da interface.
- Pense nela como a biblioteca viva da SPA.

## Diretrizes
- Antes de criar um novo componente, verifique se navbar, footer, botoes, blocos de destaque, grupos de links ou secoes de conteudo ja cobrem a necessidade.
- Prefira componentes pequenos, focados e compostos entre si.
- Se um padrao aparecer em mais de um lugar, considere componentizar.

## Test First
- Qualquer mudanca em componente compartilhado deve comecar pela revisao dos testes que cobrem seu comportamento.
- Atualize ou crie testes para comportamento, composicao e estados relevantes.
- Execute a falha esperada antes da implementacao.

## Restricoes visuais
- Nao altere tema, cor, fonte ou estilo base sem pedido explicito.
- Ajustes visuais devem preservar a identidade atual da aplicacao.
