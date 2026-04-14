# AGENTS.md

## Papel desta area
- Esta area define contratos compartilhados entre partes da aplicacao.
- Ela deve permanecer pequena, clara e orientada a reutilizacao.

## Diretrizes
- Use contratos simples e sem excesso de abstracao.
- Sempre que um componente ou pagina depender de dados estruturados compartilhados, avalie se o contrato deve viver aqui.
- Evite criar tipos prematuros sem uso claro.

## Testes e impacto
- Alteracoes em contratos podem afetar varias partes da SPA.
- Antes de mudar qualquer definicao compartilhada, revise os testes que validam os consumidores afetados.
- A implementacao deve seguir o fluxo Test First.
