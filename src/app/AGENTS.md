# AGENTS.md

## Papel desta area
- Esta area organiza a aplicacao principal da SPA.
- Aqui vivem as decisoes de composicao entre paginas, navegacao, layout global e configuracoes compartilhadas da experiencia.

## Diretrizes de arquitetura
- Trate a aplicacao como uma SPA educacional orientada por paginas de conteudo.
- Garanta navegacao simples, previsivel e amigavel para iniciantes.
- Toda nova capacidade deve se encaixar em uma estrutura clara de paginas, componentes reutilizaveis e contratos compartilhados.

## Fluxo obrigatorio para novas demandas
- Revise os testes existentes antes de qualquer implementacao.
- Ajuste ou crie testes para refletir o novo comportamento esperado da aplicacao.
- Confirme a falha inicial.
- Implemente em pequenos passos.
- Valide novamente os testes ao final.

## Composicao
- Reutilize ao maximo elementos globais como navbar, footer, secoes de conteudo e blocos de navegacao.
- Quando uma nova pagina repetir padroes, componha a partir de elementos existentes antes de criar estruturas paralelas.
- Evite acoplamento entre pagina e layout global.

## UX e identidade
- Preserve o visual atual da aplicacao.
- Nao altere tema, tipografia ou paleta sem solicitacao explicita.
- Priorize legibilidade, progressao de leitura e consistencia entre paginas.
