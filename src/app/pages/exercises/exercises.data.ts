export type ExerciseItem = {
  title: string;
  summary: string;
  href: string;
  subcategory: string;
};

export type ExerciseSubcategory = {
  slug: string;
  title: string;
  description: string;
  exercises: ExerciseItem[];
};

export const exerciseSubcategories: ExerciseSubcategory[] = [
  {
    slug: 'concepts-basics',
    title: 'Conceitos Básicos',
    description: 'Exercícios introdutórios de leitura, variáveis, saída formatada e contas simples.',
    exercises: [
      {
        title: 'Hello World',
        summary: 'Exibir a mensagem "Hello World!" exatamente como pedida.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS/1000HelloWorld',
        subcategory: 'concepts-basics',
      },
      {
        title: 'Extremamente Básico',
        summary: 'Ler dois valores inteiros e exibir a soma no formato solicitado pelo problema.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS/1001ExtremamenteBasico',
        subcategory: 'concepts-basics',
      },
      {
        title: 'Área do Círculo',
        summary: 'Calcular a área de um círculo a partir do raio informado.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS/1002AreaCirculo',
        subcategory: 'concepts-basics',
      },
      {
        title: 'Soma Simples',
        summary: 'Ler dois valores inteiros e exibir a soma entre eles.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS/1003SomaSimples',
        subcategory: 'concepts-basics',
      },
      {
        title: 'Produto Simples',
        summary: 'Ler dois valores inteiros e exibir o produto correspondente.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS/1004ProdutoSimples',
        subcategory: 'concepts-basics',
      },
    ],
  },
  {
    slug: 'conditionals',
    title: 'Estruturas de Condição',
    description: 'Exercícios de comparação, classificação e escolha de caminhos com base em regras.',
    exercises: [
      {
        title: 'O Maior',
        summary: 'Ler três valores e mostrar qual deles é o maior.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO/1013Maior',
        subcategory: 'conditionals',
      },
      {
        title: 'Teste de Seleção 1',
        summary: 'Verificar se quatro valores obedecem ao conjunto de regras definido no enunciado.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO/1035teste_selecao',
        subcategory: 'conditionals',
      },
      {
        title: 'Intervalo',
        summary: 'Identificar em qual intervalo numérico um valor real se encontra.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO/1037intervalo',
        subcategory: 'conditionals',
      },
      {
        title: 'Lanche',
        summary: 'Calcular o valor total de um pedido a partir do código do item e da quantidade.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO/1038lanche',
        subcategory: 'conditionals',
      },
      {
        title: 'Média 3',
        summary: 'Calcular a média ponderada e decidir se o aluno foi aprovado, reprovado ou ficou em exame.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO/1040media_3',
        subcategory: 'conditionals',
      },
    ],
  },
  {
    slug: 'loops',
    title: 'Estruturas de Repetição',
    description: 'Exercícios de contagem, filtros, acumulação e leitura de vários casos em sequência.',
    exercises: [
      {
        title: 'Pares entre Cinco Números',
        summary: 'Ler cinco valores inteiros e contar quantos deles são pares.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO/1059pares',
        subcategory: 'loops',
      },
      {
        title: 'Números Positivos',
        summary: 'Ler seis valores e informar quantos deles são positivos.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO/1060Positivos',
        subcategory: 'loops',
      },
      {
        title: 'Positivos e Média',
        summary: 'Contar valores positivos e calcular a média apenas desses valores.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO/1064Positivo_media',
        subcategory: 'loops',
      },
      {
        title: 'Pares, Ímpares, Positivos e Negativos',
        summary: 'Classificar cinco valores inteiros em quatro contagens diferentes.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO/1066Numeros',
        subcategory: 'loops',
      },
      {
        title: 'Números Ímpares',
        summary: 'Exibir todos os números ímpares de 1 até o valor inteiro informado.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO/1067Numeros_impares',
        subcategory: 'loops',
      },
    ],
  },
  {
    slug: 'decomposition',
    title: 'Decomposição',
    description: 'Exercícios de conversão, quebra em etapas e uso de valores intermediários.',
    exercises: [
      {
        title: 'Cédulas',
        summary: 'Decompor um valor inteiro na menor quantidade possível de cédulas.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO/1018Cedulas',
        subcategory: 'decomposition',
      },
      {
        title: 'Conversão de Tempo',
        summary: 'Transformar um tempo em segundos para horas, minutos e segundos.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO/1019Conversa_tempo',
        subcategory: 'decomposition',
      },
      {
        title: 'Idade em Dias',
        summary: 'Converter uma quantidade total de dias em anos, meses e dias.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO/1020idade_dias',
        subcategory: 'decomposition',
      },
      {
        title: 'Notas e Moedas',
        summary: 'Decompor um valor monetário em notas e moedas com as quantidades corretas.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO/1021notas_moedas',
        subcategory: 'decomposition',
      },
      {
        title: 'Tempo de um Evento',
        summary: 'Calcular a duração total de um evento a partir de dia e horário de início e fim.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO/1061Tempo_evento',
        subcategory: 'decomposition',
      },
    ],
  },
  {
    slug: 'lists',
    title: 'Listas',
    description: 'Exercícios de vetores, leitura por posição, substituição e ordenação simples.',
    exercises: [
      {
        title: 'Sort Simples',
        summary: 'Ler três valores inteiros e exibi-los em ordem crescente.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS/1042sort_simples',
        subcategory: 'lists',
      },
      {
        title: 'Substituição em Vetor I',
        summary: 'Substituir valores nulos ou negativos de um vetor pelo número 1.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS/1172substituicao_vetor_1',
        subcategory: 'lists',
      },
      {
        title: 'Preenchimento de Vetor I',
        summary: 'Preencher um vetor a partir de um valor inicial dobrando o anterior a cada posição.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS/1173preenchimento_vetor1',
        subcategory: 'lists',
      },
      {
        title: 'Seleção em Vetor I',
        summary: 'Ler valores reais e exibir apenas os que atendem ao critério pedido com sua posição.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS/1174selecao_veto1',
        subcategory: 'lists',
      },
      {
        title: 'Troca em Vetor I',
        summary: 'Trocar os valores de um vetor invertendo as posições do início e do fim.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS/1175Troca_vetor1',
        subcategory: 'lists',
      },
    ],
  },
  {
    slug: 'matrices',
    title: 'Matrizes',
    description: 'Exercícios de leitura em grade, colunas e regiões definidas por diagonais.',
    exercises: [
      {
        title: 'Área Direita',
        summary: 'Calcular a soma ou a média dos valores da área direita de uma matriz.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES/1090area_direita',
        subcategory: 'matrices',
      },
      {
        title: 'Coluna na Matriz',
        summary: 'Ler uma matriz e calcular a soma ou a média de uma coluna escolhida.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES/1182coluna_matriz',
        subcategory: 'matrices',
      },
      {
        title: 'Acima da Diagonal Principal',
        summary: 'Processar apenas os elementos posicionados acima da diagonal principal da matriz.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES/1183acima_diagonal_principal',
        subcategory: 'matrices',
      },
      {
        title: 'Abaixo da Diagonal Principal',
        summary: 'Processar apenas os elementos posicionados abaixo da diagonal principal da matriz.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES/1184abaixo_diagonal_principal',
        subcategory: 'matrices',
      },
      {
        title: 'Acima da Diagonal Secundária',
        summary: 'Calcular a soma ou a média dos elementos acima da diagonal secundária.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES/1185acima_diagonal_secundaria',
        subcategory: 'matrices',
      },
    ],
  },
  {
    slug: 'strings',
    title: 'Strings',
    description: 'Exercícios de leitura textual, comparação de palavras e formatação de saída.',
    exercises: [
      {
        title: 'Ho Ho Ho',
        summary: 'Montar a saudação de Natal repetindo a interjeição no formato pedido.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS/1759hohoho',
        subcategory: 'strings',
      },
      {
        title: 'Bazinga!',
        summary: 'Comparar duas escolhas e decidir o resultado conforme as regras do jogo.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS/1828Bazinga',
        subcategory: 'strings',
      },
      {
        title: 'Corvo Contador',
        summary: 'Interpretar sequências de caracteres para descobrir o valor contado em cada caso.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS/1848Corvo_contador',
        subcategory: 'strings',
      },
      {
        title: 'Dias Nunca Voltarão',
        summary: 'Exibir uma frase conhecida com a formatação textual exata pedida pelo problema.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS/1864dias_nunca_voltarao',
        subcategory: 'strings',
      },
      {
        title: 'Mjölnir',
        summary: 'Decidir se um nome recebe ou não a mensagem associada ao martelo de Thor.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS/1865Mjolnir',
        subcategory: 'strings',
      },
    ],
  },
  {
    slug: 'math',
    title: 'Matemática',
    description: 'Exercícios guiados por fórmulas, divisores, primalidade e raciocínio numérico.',
    exercises: [
      {
        title: 'Fórmula de Bhaskara',
        summary: 'Calcular as raízes reais de uma equação do segundo grau quando elas existirem.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA/1036Bhaskara',
        subcategory: 'math',
      },
      {
        title: 'Divisores I',
        summary: 'Encontrar e exibir todos os divisores inteiros de um número informado.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA/1157divisores1',
        subcategory: 'math',
      },
      {
        title: 'Número Perfeito',
        summary: 'Verificar se a soma dos divisores próprios de um número resulta nele mesmo.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA/1164Num_per',
        subcategory: 'math',
      },
      {
        title: 'Número Primo',
        summary: 'Determinar se um valor inteiro é primo a partir de suas divisões possíveis.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA/1165Num_primo',
        subcategory: 'math',
      },
      {
        title: 'Construindo Casas',
        summary: 'Calcular a medida do terreno usando proporções e a raiz quadrada da área total.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA/1541Construindo_casas',
        subcategory: 'math',
      },
    ],
  },
  {
    slug: 'ad-hoc',
    title: 'Ad-Hoc',
    description: 'Exercícios de interpretação direta, regras específicas e simulação de casos.',
    exercises: [
      {
        title: 'Animal',
        summary: 'Identificar o animal correto seguindo uma árvore de características informadas.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC/1049Animal',
        subcategory: 'ad-hoc',
      },
      {
        title: 'Inverno',
        summary: 'Classificar a tendência da temperatura observando a sequência de medições informada.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC/1847Inverno',
        subcategory: 'ad-hoc',
      },
      {
        title: 'De Quem é a Vez?',
        summary: 'Determinar o vencedor de uma rodada usando a regra combinada de escolha e paridade.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC/1914_vez',
        subcategory: 'ad-hoc',
      },
      {
        title: 'Pula Sapo',
        summary: 'Verificar se o sapo consegue atravessar a sequência de canos respeitando seu alcance.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC/1961pula_sapo',
        subcategory: 'ad-hoc',
      },
      {
        title: 'Jornada nas Estrelas',
        summary: 'Calcular a quantidade necessária de tripulantes ou recursos conforme a regra do enunciado.',
        href: 'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC/1972_jornada',
        subcategory: 'ad-hoc',
      },
    ],
  },
];
