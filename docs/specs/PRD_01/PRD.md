# PRD 01 - Pagina de Conceitos

## 1. Visao geral

Este PRD define a especificacao funcional da pagina de conceitos da SPA educacional 3P.

A pagina deve servir como ponto central de estudo para iniciantes em programacao, apresentando os principais blocos de aprendizado do projeto em formato textual, claro e progressivo. O conteudo base desta pagina deve ser derivado dos READMEs dos diretorios de conceitos do repositorio de referencia:

- [Projeto-3P / branch `new-sturcture`](https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture)

## 2. Problema

Hoje o projeto possui uma experiencia inicial de apresentacao, mas ainda nao oferece uma pagina estruturada para orientar o estudante pelos conceitos fundamentais que sustentam os exercicios e a trilha de aprendizagem.

Sem essa pagina, o usuario iniciante pode:

- nao entender a progressao dos temas;
- nao saber por onde comecar;
- nao perceber a relacao entre teoria e exercicios;
- nao encontrar facilmente os links para o repositorio de resolucao.

## 3. Objetivo do produto

Criar uma pagina de conceitos que:

- apresente os temas centrais da jornada de aprendizagem;
- explique, em linguagem simples, o que cada bloco ensina;
- indique o que o estudante vai praticar em cada etapa;
- conecte cada conceito a um repositorio de exercicios e resolucoes;
- reforce uma progressao natural de estudo para iniciantes.

## 4. Publico-alvo

- Iniciantes absolutos em programacao.
- Estudantes que ainda estao desenvolvendo familiaridade com entrada, processamento e saida.
- Pessoas que aprendem melhor quando o conteudo esta organizado em pequenos blocos conceituais.

## 5. Escopo desta entrega

Esta entrega especifica apenas a pagina de conceitos.

Inclui:

- estrutura da pagina;
- organizacao dos conceitos;
- tom editorial;
- requisitos de navegacao da pagina;
- requisitos de ligacao com o repositorio de exercicios;
- criterios de aceitacao de produto.

Nao inclui:

- implementacao da pagina;
- alteracao de tema visual;
- criacao ou mudanca de identidade grafica;
- criacao de um sistema de busca global;
- traducao do conteudo para outros idiomas.

## 6. Fontes de conteudo

O conteudo da pagina deve ser baseado nos READMEs principais dos seguintes diretorios do repositorio de referencia:

1. `01_CONCEITOS_BASICOS`
2. `02_ESTRUTURAS_DE_CONDICAO`
3. `03_ESTRUTURAS_DE_REPETICAO`
4. `04_DECOMPOSICAO`
5. `05_LISTAS`
6. `06_MATRIZES`
7. `07_STRINGS`
8. `08_MATEMATICA`
9. `09_AD_HOC`

O objetivo nao e copiar literalmente esses textos, e sim transformar o conteudo em uma experiencia de leitura adequada para a SPA, preservando o sentido pedagogico de cada categoria.

## 7. Requisitos de conteudo

### 7.1 Tom e linguagem

O texto da pagina deve:

- usar linguagem simples e acolhedora;
- evitar jargao sem explicacao;
- priorizar clareza e progressao;
- conversar com quem esta comecando;
- explicar o valor pratico de cada conceito.

### 7.2 Estrutura editorial por conceito

Cada conceito exibido na pagina deve conter, no minimo:

- nome do conceito;
- explicacao breve do que sera praticado;
- lista curta do que o estudante aprende;
- indicacao do tipo de exercicio que costuma aparecer;
- orientacao de estudo ou dica de progressao;
- link contextualizado para o repositorio de exercicios ou resolucoes.

### 7.3 Restricao editorial

A pagina nao deve exibir instrucoes de desenvolvimento, solicitacoes do usuario, detalhes de implementacao ou observacoes tecnicas como se fossem conteudo educacional.

## 8. Conceitos obrigatorios

### 8.1 Conceitos Basicos

Deve apresentar esta etapa como a porta de entrada do estudante.

Pontos centrais:

- leitura de dados;
- uso de variaveis;
- conversao de tipos;
- operacoes aritmeticas;
- impressao formatada;
- relacao entre entrada, processamento e saida.

Mensagem pedagogica esperada:

- este e o primeiro passo antes de avancar para decisoes e repeticao.

### 8.2 Estruturas de Condicao

Deve mostrar que o programa passa a escolher caminhos diferentes de acordo com regras.

Pontos centrais:

- comparacoes;
- blocos condicionais;
- casos mutuamente exclusivos;
- regras e fronteiras;
- tratamento de casos especiais.

Mensagem pedagogica esperada:

- o estudante aprende a transformar regras em decisoes.

### 8.3 Estruturas de Repeticao

Deve mostrar como o computador repete processos sem reescrever os mesmos comandos.

Pontos centrais:

- lacos com quantidade fixa;
- repeticao condicionada;
- contadores e acumuladores;
- leitura de varios casos;
- combinacao entre repeticao e condicao.

Mensagem pedagogica esperada:

- esta etapa prepara o estudante para trabalhar com volume maior de dados.

### 8.4 Decomposicao

Deve apresentar a ideia de quebrar um problema maior em partes menores.

Pontos centrais:

- raciocinio em etapas;
- valores intermediarios;
- divisao inteira e resto;
- decomposicao de medidas, tempo, dinheiro ou valores;
- sequencia organizada de calculos.

Mensagem pedagogica esperada:

- resolver bem um problema grande comeca por separar partes menores.

### 8.5 Listas

Deve introduzir colecoes de dados e o processamento de varios elementos.

Pontos centrais:

- armazenamento de varios valores;
- indices;
- percurso com repeticao;
- busca, soma, comparacao e ordenacao;
- manipulacao segura de colecoes.

Mensagem pedagogica esperada:

- listas marcam a transicao para problemas com mais dados.

### 8.6 Matrizes

Deve explicar o trabalho com dados organizados em linhas e colunas.

Pontos centrais:

- leitura em grade;
- linhas e colunas;
- dois indices;
- diagonais, bordas e regioes;
- repeticao aninhada.

Mensagem pedagogica esperada:

- matrizes ampliam a nocao de posicao, percurso e leitura estruturada.

### 8.7 Strings

Deve apresentar manipulacao de texto como habilidade fundamental.

Pontos centrais:

- leitura de palavras e frases;
- comparacao de caracteres;
- transformacoes textuais;
- percurso caractere por caractere;
- cuidado com formato da saida.

Mensagem pedagogica esperada:

- trabalhar com texto exige atencao a detalhes e melhora a precisao.

### 8.8 Matematica

Deve apresentar problemas em que o principal desafio e descobrir a ideia matematica correta.

Pontos centrais:

- formulas;
- divisibilidade e propriedades de numeros;
- potencia, resto e divisao inteira;
- geometria e aproximacoes;
- precisao numerica e arredondamento.

Mensagem pedagogica esperada:

- nem todo problema e resolvido so com codigo; muitos exigem entender bem a matematica por tras.

### 8.9 Ad-Hoc

Deve explicar que esta categoria depende muito de interpretacao do enunciado e fidelidade as regras.

Pontos centrais:

- leitura cuidadosa;
- regras especiais;
- simulacao simples;
- organizacao passo a passo;
- validacao de casos especificos.

Mensagem pedagogica esperada:

- transformar texto em algoritmo e uma habilidade central para problemas reais.

## 9. Requisitos de experiencia

### 9.1 Estrutura da pagina

A pagina deve conter:

- uma abertura com contexto sobre o que sao os conceitos;
- uma explicacao curta sobre como usar a pagina;
- uma lista ou grade de blocos conceituais;
- uma ordem de progressao recomendada;
- chamadas para acessar exercicios e resolucoes;
- fechamento incentivando continuidade do estudo.

### 9.2 Navegacao interna

A pagina deve permitir que o estudante:

- identifique facilmente os conceitos disponiveis;
- entenda a ordem recomendada de estudo;
- acesse a explicacao de cada bloco sem friccao;
- encontre o link relacionado ao repositorio de exercicios.

### 9.3 Consistencia com o produto atual

A futura implementacao da pagina deve:

- preservar o tema visual atual;
- manter a identidade de cor, fonte e atmosfera existentes;
- reutilizar o maximo possivel dos componentes atuais e futuros componentes compartilhados;
- seguir a abordagem de componentizacao e reaproveitamento ja definida no projeto.

## 10. Requisitos de integracao com exercicios

Cada conceito deve ter uma ponte clara para o repositorio de exercicios e resolucoes.

Essa ponte deve:

- explicar o que o estudante vai encontrar ao clicar;
- deixar claro que os exercicios representam pratica do conceito;
- evitar links soltos sem contexto;
- favorecer continuidade entre leitura teorica e pratica.

## 11. Requisitos nao funcionais

- A pagina deve ser legivel em desktop e mobile.
- O conteudo deve ser escaneavel por blocos curtos.
- A linguagem deve ser adequada para iniciantes.
- O texto deve evitar densidade excessiva.
- A implementacao futura deve seguir Test First.
- A implementacao futura nao deve alterar o tema sem pedido explicito.

## 12. Estrategia de desenvolvimento

A implementacao futura desta pagina deve ser planejada em pequenos sprints testaveis.

Sequencia recomendada:

1. Definir a estrutura base da rota e da composicao da pagina.
2. Criar ou ajustar testes para a existencia da pagina e seus blocos principais.
3. Implementar a estrutura inicial.
4. Adicionar os blocos conceituais com conteudo resumido.
5. Adicionar os links contextualizados para exercicios e resolucoes.
6. Refinar responsividade e reaproveitamento de componentes.

## 13. Criterios de aceitacao

- Existe uma pagina dedicada a conceitos dentro da SPA.
- A pagina apresenta os nove conceitos obrigatorios definidos neste PRD.
- Cada conceito possui descricao introdutoria e indicacao do que sera praticado.
- Cada conceito possui contexto sobre tipos de exercicio ou aplicacao esperada.
- Cada conceito possui uma chamada para acesso ao repositorio de exercicios ou resolucoes.
- A pagina comunica uma ordem de progressao recomendada para iniciantes.
- O texto esta adaptado para leitura educacional e nao e mera copia crua da fonte.
- O visual da aplicacao permanece consistente com o padrao atual.
- A implementacao segue Test First, com testes criados ou ajustados antes do desenvolvimento.

## 14. Referencia resumida dos READMEs fonte

Os READMEs de referencia organizam os conceitos como uma trilha de progressao:

- fundamentos de entrada, variaveis, contas e saida;
- decisoes por regras;
- repeticao de processos;
- quebra de problemas em etapas;
- processamento de colecoes;
- estruturas em grade;
- manipulacao de texto;
- raciocinio matematico;
- interpretacao de regras e problemas ad-hoc.

## 15. Observacoes finais

Esta pagina deve funcionar como ponte entre acolhimento e pratica. Ela nao e apenas uma listagem de topicos: ela precisa ajudar o estudante a entender o que vai aprender, por que aquilo importa e como avancar para a pratica com seguranca.
