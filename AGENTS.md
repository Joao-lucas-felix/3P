# AGENTS.md

## Missao do projeto
- Esta aplicacao deve evoluir como uma SPA educacional para iniciantes em programacao.
- O foco principal e apresentar conteudo textual claro, progressivo e acolhedor.
- A experiencia deve incluir links para um repositorio externo com resolucoes de exercicios e materiais de apoio.

## Objetivos de produto
- Ensinar fundamentos de programacao em linguagem simples.
- Organizar o aprendizado em paginas pequenas, objetivas e navegaveis.
- Priorizar clareza de leitura, acessibilidade e continuidade de estudo.

## Metodologia obrigatoria
- Trabalhe em modo Test First.
- Sempre que uma nova pagina, fluxo ou funcionalidade for solicitada, comece avaliando os testes existentes.
- Identifique o que sera preservado, quebrado, ajustado ou criado.
- Crie ou altere os testes primeiro.
- Execute os testes e confirme a falha esperada antes de implementar.
- So depois desenvolva a solucao.
- Ao finalizar, execute novamente os testes relevantes para confirmar o comportamento esperado.

## Planejamento de execucao
- Antes de implementar, planeje a tarefa em pequenos incrementos testaveis.
- Prefira sprints curtos, com escopo bem delimitado e validacao clara.
- Se a solicitacao for grande, decomponha em entregas menores que possam ser testadas isoladamente.

## Regras de frontend
- Preserve o tema visual atual.
- Nao altere cores, fontes, atmosfera visual, identidade de interface ou estilo geral sem pedido explicito.
- Nao introduza uma nova linguagem visual sem solicitacao direta.
- Em qualquer evolucao, maximize a reutilizacao de componentes existentes.
- Antes de criar algo novo, verifique se a necessidade pode ser atendida por componentes de layout, navegacao, secoes de conteudo, botoes ou blocos reutilizaveis ja existentes.
- Quando surgir repeticao, extraia componentes reutilizaveis de forma incremental e testavel.

## Padrao de implementacao
- Favoreca componentes pequenos, com responsabilidade unica.
- Mantenha separacao clara entre layout, conteudo, navegacao e contratos compartilhados.
- O conteudo deve ser facil de atualizar e expandir para novas paginas educacionais.
- Os links para repositorios de exercicios devem ser apresentados com contexto pedagogico, explicando o que o estudante encontrara.

## Experiencia educacional
- Escreva textos para iniciantes, evitando jargao sem explicacao.
- Estruture as paginas para leitura linear e aprendizado gradual.
- Sempre que possivel, destaque objetivo, explicacao, pratica e proximo passo.

## Restricoes
- Nao reestilize a aplicacao sem solicitacao explicita.
- Nao pule a etapa de testes.
- Nao implemente grandes blocos de funcionalidade sem antes dividir em partes pequenas e verificaveis.
- Nenhuma instrucao dada ao agente deve aparecer como conteudo visivel nas paginas da aplicacao.
- Pedidos de implementacao, diretrizes tecnicas, detalhes de interface e observacoes de desenvolvimento nao podem virar texto da experiencia final.
- Exemplo: se for solicitado um modal com fundo transparente, isso deve orientar a implementacao, mas nao deve aparecer escrito em nenhuma pagina, secao, card, botao, navbar, footer ou outro conteudo visivel ao usuario final.
