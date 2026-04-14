import { exerciseSubcategories } from './exercises.data';

describe('exercise data contract', () => {
  it('should define all planned real subcategories', () => {
    const titles = exerciseSubcategories.map((subcategory) => subcategory.title);

    expect(titles).toContain('Conceitos Básicos');
    expect(titles).toContain('Estruturas de Condição');
    expect(titles).toContain('Estruturas de Repetição');
    expect(titles).toContain('Decomposição');
    expect(titles).toContain('Listas');
    expect(titles).toContain('Matrizes');
    expect(titles).toContain('Strings');
    expect(titles).toContain('Matemática');
    expect(titles).toContain('Ad-Hoc');
  });

  it('should define real basic exercises from the repository', () => {
    const basics = exerciseSubcategories.find((subcategory) => subcategory.slug === 'concepts-basics');
    const exerciseTitles = basics?.exercises.map((exercise) => exercise.title) ?? [];

    expect(exerciseTitles).toEqual(
      expect.arrayContaining([
        'Hello World',
        'Extremamente Básico',
        'Área do Círculo',
        'Soma Simples',
        'Produto Simples',
      ]),
    );
    expect(basics?.exercises[0]?.href).toContain('01_CONCEITOS_BASICOS/1000HelloWorld');
  });

  it('should define real conditional exercises from the repository', () => {
    const conditionals = exerciseSubcategories.find((subcategory) => subcategory.slug === 'conditionals');
    const exerciseTitles = conditionals?.exercises.map((exercise) => exercise.title) ?? [];

    expect(exerciseTitles).toEqual(
      expect.arrayContaining([
        'O Maior',
        'Teste de Seleção 1',
        'Intervalo',
        'Lanche',
        'Média 3',
      ]),
    );
    expect(conditionals?.exercises[0]?.href).toContain('02_ESTRUTURAS_DE_CONDICAO/1013Maior');
  });

  it('should expand the mapping with real repetition and decomposition exercises', () => {
    const loops = exerciseSubcategories.find((subcategory) => subcategory.slug === 'loops');
    const decomposition = exerciseSubcategories.find((subcategory) => subcategory.slug === 'decomposition');

    expect(loops?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Pares entre Cinco Números',
        'Números Positivos',
        'Positivos e Média',
        'Pares, Ímpares, Positivos e Negativos',
        'Números Ímpares',
      ]),
    );
    expect(decomposition?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Cédulas',
        'Conversão de Tempo',
        'Idade em Dias',
        'Notas e Moedas',
        'Tempo de um Evento',
      ]),
    );
    expect(loops?.exercises[0]?.href).toContain('03_ESTRUTURAS_DE_REPETICAO/1059pares');
    expect(decomposition?.exercises[0]?.href).toContain('04_DECOMPOSICAO/1018Cedulas');
  });

  it('should complete the main coverage with the remaining real subcategories', () => {
    const lists = exerciseSubcategories.find((subcategory) => subcategory.slug === 'lists');
    const matrices = exerciseSubcategories.find((subcategory) => subcategory.slug === 'matrices');
    const strings = exerciseSubcategories.find((subcategory) => subcategory.slug === 'strings');
    const math = exerciseSubcategories.find((subcategory) => subcategory.slug === 'math');
    const adHoc = exerciseSubcategories.find((subcategory) => subcategory.slug === 'ad-hoc');

    expect(lists?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Sort Simples',
        'Substituição em Vetor I',
        'Preenchimento de Vetor I',
        'Seleção em Vetor I',
        'Troca em Vetor I',
      ]),
    );
    expect(matrices?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Área Direita',
        'Coluna na Matriz',
        'Acima da Diagonal Principal',
        'Abaixo da Diagonal Principal',
        'Acima da Diagonal Secundária',
      ]),
    );
    expect(strings?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Ho Ho Ho',
        'Bazinga!',
        'Corvo Contador',
        'Dias Nunca Voltarão',
        'Mjölnir',
      ]),
    );
    expect(math?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Fórmula de Bhaskara',
        'Divisores I',
        'Número Perfeito',
        'Número Primo',
        'Construindo Casas',
      ]),
    );
    expect(adHoc?.exercises.map((exercise) => exercise.title)).toEqual(
      expect.arrayContaining([
        'Animal',
        'Inverno',
        'De Quem é a Vez?',
        'Pula Sapo',
        'Jornada nas Estrelas',
      ]),
    );
    expect(lists?.exercises[0]?.href).toContain('05_LISTAS/1042sort_simples');
    expect(matrices?.exercises[0]?.href).toContain('06_MATRIZES/1090area_direita');
    expect(strings?.exercises[0]?.href).toContain('07_STRINGS/1759hohoho');
    expect(math?.exercises[0]?.href).toContain('08_MATEMATICA/1036Bhaskara');
    expect(adHoc?.exercises[0]?.href).toContain('09_AD_HOC/1049Animal');
  });

  it('should keep every mapped exercise with title, summary and href', () => {
    const allExercises = exerciseSubcategories.flatMap((subcategory) => subcategory.exercises);

    expect(allExercises.length).toBeGreaterThan(0);

    for (const exercise of allExercises) {
      expect(exercise.title.length).toBeGreaterThan(0);
      expect(exercise.summary.length).toBeGreaterThan(0);
      expect(exercise.href.length).toBeGreaterThan(0);
    }
  });

  it('should keep subcategory descriptions and exercise summaries consistent and free from placeholders', () => {
    const placeholderPattern = /(placeholder|lorem|etc\.|alguma coisa)/i;

    for (const subcategory of exerciseSubcategories) {
      expect(subcategory.description.startsWith('Exercícios')).toBe(true);
      expect(subcategory.description.endsWith('.')).toBe(true);
      expect(placeholderPattern.test(subcategory.description)).toBe(false);

      for (const exercise of subcategory.exercises) {
        expect(exercise.summary.endsWith('.')).toBe(true);
        expect(placeholderPattern.test(exercise.summary)).toBe(false);
      }
    }
  });

  it('should increase the total amount of mapped exercises to the main coverage level', () => {
    const totalExercises = exerciseSubcategories.reduce(
      (currentTotal, subcategory) => currentTotal + subcategory.exercises.length,
      0,
    );

    expect(totalExercises).toBeGreaterThanOrEqual(45);
  });

  it('should keep exercises grouped by subcategory', () => {
    const firstSubcategory = exerciseSubcategories[0];

    expect(firstSubcategory.exercises.length).toBeGreaterThan(0);
    expect(firstSubcategory.exercises.every((exercise) => exercise.subcategory === firstSubcategory.slug)).toBe(true);
  });
});
