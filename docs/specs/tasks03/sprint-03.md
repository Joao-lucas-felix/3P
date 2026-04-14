# Sprint 03

## Objetivo

Validar o primeiro container expansível ao clique dentro da página de exercícios.

## Alteração mínima esperada

- ajustar testes de interação da página;
- adicionar um único grupo expansível;
- revelar poucos exercícios de exemplo ao abrir o container.

## Valor entregue

Esta sprint prova o comportamento central da experiência antes de escalar para muitas subcategorias.

## Teste a criar ou ajustar antes da implementação

- teste validando estado recolhido inicial;
- teste validando expansão ao clique;
- teste validando exibição de nome, descrição e link do exercício.

## Evidência de falha esperada antes de implementar

- a página ainda não possui containers expansivos;
- os testes devem falhar pela falta da interação esperada.

## Implementação esperada

- adicionar o primeiro bloco expansível;
- manter a interação simples;
- reaproveitar o estilo atual da aplicação.

## Documentação da execução

Ao concluir a sprint, registrar:

- quais testes falharam primeiro;
- como o primeiro container foi implementado;
- quais dados de exemplo foram usados;
- o que segue para extração reutilizável.

## Critério de conclusão

- a página exibe um container expansível funcional;
- os exercícios aparecem ao abrir o bloco;
- os testes da sprint passam.

## Registro de execução

- os primeiros testes que falharam foram os dois novos cenários em `src/app/pages/exercises/exercises.spec.ts`, ambos exigindo um bloco com `data-testid="exercise-subcategory"` e a expansão do conteúdo ao clique;
- o primeiro container foi implementado diretamente em `src/app/pages/exercises/exercises.ts`, com estado local via `signal(false)`, clique no bloco inteiro e exibição condicional da lista de exercícios;
- os dados de exemplo usados foram a subcategoria `Conceitos Básicos` e o exercício `Soma Simples`, já presentes em `src/app/pages/exercises/exercises.data.ts`;
- o próximo passo segue sendo a extração desse comportamento para um componente reutilizável, permitindo escalar a página para muitas subcategorias.
