# AGENTS.md

## Papel desta area
- Esta area concentra blocos compartilhados da experiencia.
- Tudo o que for reutilizavel entre paginas deve ser pensado primeiro aqui em nivel conceitual.

## Responsabilidades
- Sustentar consistencia de navegacao, encerramento de pagina, apresentacao estrutural e contratos comuns.
- Oferecer bases para reaproveitamento em toda a SPA.

## Regras de evolucao
- Antes de criar uma nova estrutura compartilhada, confirme que ela atende mais de um contexto ou tem potencial real de reutilizacao.
- Toda alteracao deve respeitar a metodologia Test First.
- Mudancas aqui exigem especial cuidado com regressao, pois podem impactar varias paginas.

## Design e UX
- Preserve o padrao visual atual.
- Componentes compartilhados devem reforcar continuidade, previsibilidade e leitura confortavel.
- Prefira solucoes discretas, consistentes e reutilizaveis.
