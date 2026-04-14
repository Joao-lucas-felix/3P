export type ConceptPageContent = {
  slug: string;
  title: string;
  summary: string;
  learnings: string[];
  studyTip: string;
  practiceHref: string;
  pageIntro: string;
  pagePlaceholder: string;
};

export type ConceptGroup = {
  title: string;
  description: string;
  concepts: ConceptPageContent[];
};

export const conceptPages = {
  basics: {
    slug: 'basics',
    title: 'Conceitos Básicos',
    summary:
      'Este bloco apresenta os primeiros passos em programação, conectando entrada, processamento e saída de forma simples.',
    learnings: ['Leitura de dados', 'Uso de variáveis', 'Conversão de tipos', 'Operações aritméticas'],
    studyTip: 'Comece por este bloco para ganhar segurança antes de avançar para decisões e repetição.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/01_CONCEITOS_BASICOS',
    pageIntro:
      'Esta página apresenta os fundamentos iniciais de programação e prepara o estudante para os primeiros exercícios da trilha.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para leitura de dados, variáveis, contas simples e saída formatada.',
  },
  conditionals: {
    slug: 'conditionals',
    title: 'Estruturas de Condição',
    summary:
      'Este bloco mostra como transformar regras em decisões, fazendo o programa escolher caminhos diferentes para cada caso.',
    learnings: [
      'Comparações entre valores',
      'Uso de if, elif e else',
      'Casos mutuamente exclusivos',
      'Regras e limites',
    ],
    studyTip:
      'Depois deste bloco, fica mais natural resolver problemas que dependem de regras e classificações.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/02_ESTRUTURAS_DE_CONDICAO',
    pageIntro:
      'Esta página introduz decisões por regras, comparações e organização de casos para resolver problemas com escolhas.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para entender como comparar valores e seguir caminhos diferentes no programa.',
  },
  loops: {
    slug: 'loops',
    title: 'Estruturas de Repetição',
    summary:
      'Este bloco ensina a repetir tarefas sem reescrever os mesmos comandos, trabalhando com contagem, acumulação e leitura de vários casos.',
    learnings: [
      'Laços com for e while',
      'Contadores e acumuladores',
      'Leitura de vários valores',
      'Combinação entre repetição e condição',
    ],
    studyTip:
      'Use este bloco para praticar repetições antes de avançar para estruturas com mais dados.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/03_ESTRUTURAS_DE_REPETICAO',
    pageIntro:
      'Esta página introduz repetições, contagem, acumulação e leitura de vários casos em problemas sequenciais.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para entender quando repetir passos e como acompanhar o estado do algoritmo.',
  },
  decomposition: {
    slug: 'decomposition',
    title: 'Decomposição',
    summary:
      'Este bloco ensina a quebrar um problema maior em partes menores, organizando o raciocínio em etapas claras.',
    learnings: [
      'Divisão do problema em etapas',
      'Uso de valores intermediários',
      'Divisão inteira e resto',
      'Sequência organizada de cálculos',
    ],
    studyTip:
      'Avance para este bloco quando quiser ganhar mais organização mental para resolver problemas em partes.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/04_DECOMPOSICAO',
    pageIntro:
      'Esta página apresenta a ideia de dividir um problema em etapas menores para facilitar o raciocínio.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para organizar cálculos, valores intermediários e passos de resolução.',
  },
  lists: {
    slug: 'lists',
    title: 'Listas',
    summary:
      'Este bloco apresenta coleções de dados e mostra como guardar vários valores para depois percorrer, comparar e trabalhar com busca, soma e ordenação.',
    learnings: [
      'Armazenamento de vários valores',
      'Acesso por índice',
      'Percurso com repetição',
      'Busca, soma e ordenação',
    ],
    studyTip:
      'Use este bloco para ganhar fluidez com coleções antes de avançar para estruturas em grade.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/05_LISTAS',
    pageIntro:
      'Esta página introduz coleções e percurso de valores para quem está começando a trabalhar com vários dados ao mesmo tempo.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para guardar, acessar e percorrer vários valores em uma mesma estrutura.',
  },
  matrices: {
    slug: 'matrices',
    title: 'Matrizes',
    summary:
      'Este bloco introduz dados organizados em linhas e colunas, ajudando você a entender posição, percurso, diagonais, bordas e regiões.',
    learnings: [
      'Leitura em linhas e colunas',
      'Uso de dois índices',
      'Percurso em grade',
      'Diagonais, bordas e regiões',
    ],
    studyTip:
      'Pratique este bloco quando quiser fortalecer a leitura de estruturas organizadas em tabela.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/06_MATRIZES',
    pageIntro:
      'Esta página apresenta linhas, colunas e leitura em grade para preparar o estudo de estruturas bidimensionais.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para localizar posições e percorrer dados organizados como tabela.',
  },
  strings: {
    slug: 'strings',
    title: 'Strings',
    summary:
      'Este bloco trabalha manipulação textual, ajudando você a lidar com palavras, frases e caracteres com mais precisão.',
    learnings: [
      'Leitura de texto',
      'Comparação de caracteres',
      'Transformações textuais',
      'Palavras, frases e caracteres',
    ],
    studyTip:
      'Avance para este bloco para ganhar mais cuidado com detalhes de leitura e formatação textual.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/07_STRINGS',
    pageIntro:
      'Esta página introduz leitura e manipulação de texto para trabalhar melhor com caracteres, palavras e frases.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para comparar, percorrer e transformar conteúdos textuais.',
  },
  math: {
    slug: 'math',
    title: 'Matemática',
    summary:
      'Este bloco apresenta problemas em que a principal chave da solução está no raciocínio matemático antes da implementação.',
    learnings: [
      'Aplicação de fórmulas',
      'Divisibilidade e propriedades de números',
      'Potências, resto e divisão inteira',
      'Geometria, aproximações e arredondamento',
    ],
    studyTip:
      'Use este bloco para perceber quando a melhor solução nasce da ideia matemática antes do código.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/08_MATEMATICA',
    pageIntro:
      'Esta página destaca o raciocínio matemático antes do código em problemas guiados por fórmulas e propriedades numéricas.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para identificar ideias matemáticas importantes antes de programar.',
  },
  'ad-hoc': {
    slug: 'ad-hoc',
    title: 'Ad-Hoc',
    summary:
      'Este bloco trabalha interpretação de enunciado, ajudando você a transformar regras textuais em algoritmos claros e fiéis ao problema.',
    learnings: [
      'Leitura cuidadosa de regras',
      'Simulações simples',
      'Organização passo a passo',
      'Tratamento de casos específicos',
    ],
    studyTip:
      'Avance para este bloco para treinar interpretação e fidelidade ao enunciado em problemas menos padronizados.',
    practiceHref:
      'https://github.com/BrendoMendonca/Projeto-3P/tree/new-sturcture/09_AD_HOC',
    pageIntro:
      'Esta página introduz interpretação de enunciado e regras específicas para problemas que exigem leitura cuidadosa.',
    pagePlaceholder:
      'Aqui você encontrará uma base de estudo para transformar regras textuais em passos claros de resolução.',
  },
} satisfies Record<string, ConceptPageContent>;

export const conceptGroups: ConceptGroup[] = [
  {
    title: 'Fundamentos',
    description:
      'Este grupo concentra a base da trilha e organiza os primeiros passos da leitura de dados até a resolução de problemas em etapas.',
    concepts: [
      conceptPages.basics,
      conceptPages.conditionals,
      conceptPages.loops,
      conceptPages.decomposition,
    ],
  },
  {
    title: 'Estruturas e Manipulação',
    description:
      'Este grupo reúne temas que ampliam a capacidade de lidar com coleções, posições em grade e transformações de texto.',
    concepts: [conceptPages.lists, conceptPages.matrices, conceptPages.strings],
  },
  {
    title: 'Resolução de Problemas',
    description:
      'Este grupo fecha a trilha inicial com temas em que interpretação, matemática e estratégia de resolução ficam ainda mais importantes.',
    concepts: [conceptPages.math, conceptPages['ad-hoc']],
  },
];

export const conceptPageList: ConceptPageContent[] = conceptGroups.flatMap((group) => group.concepts);
