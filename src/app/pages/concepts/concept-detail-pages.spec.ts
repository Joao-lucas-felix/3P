import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocConceptPage } from './pages/ad-hoc/ad-hoc';
import { BasicsConceptPage } from './pages/basics/basics';
import { ConditionalsConceptPage } from './pages/conditionals/conditionals';
import { DecompositionConceptPage } from './pages/decomposition/decomposition';
import { ListsConceptPage } from './pages/lists/lists';
import { LoopsConceptPage } from './pages/loops/loops';
import { MathConceptPage } from './pages/math/math';
import { MatricesConceptPage } from './pages/matrices/matrices';
import { StringsConceptPage } from './pages/strings/strings';

type ConceptPageDefinition = {
  component: Type<unknown>;
  title: string;
  intro: string;
  repositoryPath: string;
  exampleHeading: string;
  exampleSnippet: string;
};

const conceptPages: ConceptPageDefinition[] = [
  {
    component: BasicsConceptPage,
    title: 'Conceitos Básicos',
    intro: 'fundamentos iniciais de programação',
    repositoryPath: '01_CONCEITOS_BASICOS',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'ler dois valores',
  },
  {
    component: ConditionalsConceptPage,
    title: 'Estruturas de Condição',
    intro: 'decisões por regras',
    repositoryPath: '02_ESTRUTURAS_DE_CONDICAO',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'maior de idade',
  },
  {
    component: LoopsConceptPage,
    title: 'Estruturas de Repetição',
    intro: 'repetições, contagem, acumulação',
    repositoryPath: '03_ESTRUTURAS_DE_REPETICAO',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'somar cinco números',
  },
  {
    component: DecompositionConceptPage,
    title: 'Decomposição',
    intro: 'dividir um problema em etapas',
    repositoryPath: '04_DECOMPOSICAO',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'calcular horas, minutos e segundos',
  },
  {
    component: ListsConceptPage,
    title: 'Listas',
    intro: 'coleções e percurso de valores',
    repositoryPath: '05_LISTAS',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'encontrar o maior valor',
  },
  {
    component: MatricesConceptPage,
    title: 'Matrizes',
    intro: 'linhas, colunas e leitura em grade',
    repositoryPath: '06_MATRIZES',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'somar os valores de uma linha',
  },
  {
    component: StringsConceptPage,
    title: 'Strings',
    intro: 'leitura e manipulação de texto',
    repositoryPath: '07_STRINGS',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'contar vogais',
  },
  {
    component: MathConceptPage,
    title: 'Matemática',
    intro: 'raciocínio matemático antes do código',
    repositoryPath: '08_MATEMATICA',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'múltiplos de 3',
  },
  {
    component: AdHocConceptPage,
    title: 'Ad-Hoc',
    intro: 'interpretação de enunciado e regras específicas',
    repositoryPath: '09_AD_HOC',
    exampleHeading: 'Exemplo guiado',
    exampleSnippet: 'simular a movimentação',
  },
];

describe('Concept detail pages', () => {
  for (const page of conceptPages) {
    describe(page.title, () => {
      let fixture: ComponentFixture<unknown>;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [page.component],
        }).compileComponents();

        fixture = TestBed.createComponent(page.component);
        fixture.detectChanges();
        await fixture.whenStable();
      });

      it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
      });

      it('should render the page title and introduction', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const text = compiled.textContent ?? '';
        const hero = compiled.querySelector('section[data-testid="concept-detail-hero"]');

        expect(hero).not.toBeNull();
        expect(compiled.querySelector('h1')?.textContent).toContain(page.title);
        expect(text).toContain(page.intro);
        expect(hero?.textContent).toContain('Trilha de conceitos');
        expect(hero?.textContent).toContain('Estude em blocos curtos');
      });

      it('should contextualize the exercises repository link', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const practiceCard = compiled.querySelector('section[data-testid="concept-detail-practice"]');
        const links = Array.from(compiled.querySelectorAll('a'));
        const link = links.find((currentLink) =>
          (currentLink.textContent ?? '').includes('Ver exercícios e resoluções'),
        );

        expect(compiled.textContent).toContain('No repositório de exercícios');
        expect(practiceCard).not.toBeNull();
        expect(practiceCard?.textContent).toContain('Pratique com apoio do repositório');
        expect(link?.getAttribute('href')).toContain(page.repositoryPath);
      });

      it('should include a short guided example aligned with the concept', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const text = compiled.textContent ?? '';

        expect(text).toContain(page.exampleHeading);
        expect(text).toContain(page.exampleSnippet);
      });

      it('should render the reusable concept navigation with the current page highlighted', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const navigation = compiled.querySelector('section[data-testid="concept-navigation"]');
        const contentShell = compiled.querySelector('section[data-testid="concept-detail-content"]');

        expect(navigation).not.toBeNull();
        expect(contentShell).not.toBeNull();
        expect(navigation?.textContent).toContain(page.title);
        expect(contentShell?.querySelectorAll('section').length).toBeGreaterThanOrEqual(2);

        (navigation as HTMLElement).click();
        fixture.detectChanges();

        const currentLink = Array.from(compiled.querySelectorAll('section[data-testid="concept-navigation"] a')).find(
          (link) => (link.textContent ?? '').trim() === page.title,
        );

        expect(currentLink?.getAttribute('aria-current')).toBe('page');
      });

      it('should keep responsive layout and visible focus styles in the shared shell', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const hero = compiled.querySelector('section[data-testid="concept-detail-hero"]');
        const practiceCard = compiled.querySelector('section[data-testid="concept-detail-practice"]');
        const heroGrid = hero?.querySelector('.grid');
        const practiceGrid = practiceCard?.querySelector('.grid');
        const links = Array.from(compiled.querySelectorAll('section[data-testid="concept-detail-practice"] a'));

        expect(heroGrid?.className).toContain('lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.9fr)]');
        expect(practiceGrid?.className).toContain('lg:grid-cols-[minmax(0,1.45fr)_auto]');
        expect(links.every((link) => (link.getAttribute('target') ?? '') === '_blank')).toBe(true);
      });
    });
  }
});

describe('Basics concept page content', () => {
  let fixture: ComponentFixture<BasicsConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicsConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the objective of the basics page for beginners', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Objetivo deste passo');
    expect(text).toContain('entender como entrada, processamento e saída trabalham juntos');
  });

  it('should present a simple explanation, guided practice and a next step', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como pensar neste conceito');
    expect(text).toContain('Prática guiada');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('comece com exercícios de leitura de dados');
  });
});

describe('Conditionals concept page content', () => {
  let fixture: ComponentFixture<ConditionalsConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalsConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalsConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain when conditionals are useful', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Quando usar condições');
    expect(text).toContain('comparar valores e escolher entre caminhos possíveis');
  });

  it('should guide the student on what to observe in conditional exercises', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('O que observar nos exercícios');
    expect(text).toContain('repare quais regras mudam o resultado');
    expect(text).toContain('casos mutuamente exclusivos');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('avance para repetição');
  });
});

describe('Loops concept page content', () => {
  let fixture: ComponentFixture<LoopsConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopsConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoopsConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain why repetition is useful', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Por que repetir');
    expect(text).toContain('contagem, acumulação e leitura de vários casos');
  });

  it('should guide the student from repetition practice to the next step', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar repetição');
    expect(text).toContain('acompanhe como o valor muda a cada passo');
    expect(text).toContain('Próximo passo');
  });
});

describe('Decomposition concept page content', () => {
  let fixture: ComponentFixture<DecompositionConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecompositionConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DecompositionConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the idea of breaking problems into smaller parts', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Dividir para entender');
    expect(text).toContain('quebrar problemas em partes menores');
  });

  it('should orient the student to use stages and intermediate values', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como observar os exercícios');
    expect(text).toContain('valores intermediários');
    expect(text).toContain('Próximo passo');
  });
});

describe('Lists concept page content', () => {
  let fixture: ComponentFixture<ListsConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListsConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the idea of storing several values together', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Guardar vários valores');
    expect(text).toContain('coleção de dados');
  });

  it('should guide the student to observe index access and traversal', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar listas');
    expect(text).toContain('acesso por índice');
    expect(text).toContain('Percurso com repetição');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('avance para matrizes');
  });
});

describe('Matrices concept page content', () => {
  let fixture: ComponentFixture<MatricesConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatricesConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MatricesConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the idea of data organized in rows and columns', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Ler uma grade');
    expect(text).toContain('linhas e colunas');
  });

  it('should guide the student to observe positions and two indexes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar matrizes');
    expect(text).toContain('uso de dois índices');
    expect(text).toContain('posição de cada valor');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('avance para strings');
  });
});

describe('Strings concept page content', () => {
  let fixture: ComponentFixture<StringsConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringsConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StringsConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the idea of working with text carefully', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Ler texto com cuidado');
    expect(text).toContain('caracteres, palavras e frases');
  });

  it('should guide the student to observe reading and transformation of text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar strings');
    expect(text).toContain('comparar e transformar');
    expect(text).toContain('detalhes da leitura textual');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('avance para matemática');
  });
});

describe('Math concept page content', () => {
  let fixture: ComponentFixture<MathConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MathConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the role of mathematical reasoning before coding', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Pensar antes da fórmula');
    expect(text).toContain('padrões numéricos, propriedades e relações entre valores');
  });

  it('should guide the student to practice formulas and divisibility with care', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar matemática');
    expect(text).toContain('fórmula');
    expect(text).toContain('divisibilidade');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('avance para problemas ad-hoc');
  });
});

describe('Ad-hoc concept page content', () => {
  let fixture: ComponentFixture<AdHocConceptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdHocConceptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdHocConceptPage);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should explain the importance of carefully reading the problem statement', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Ler o enunciado com calma');
    expect(text).toContain('detalhes, exceções e regras que valem apenas naquele problema');
  });

  it('should guide the student to practice simulation and specific rules', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Como praticar ad-hoc');
    expect(text).toContain('simular');
    expect(text).toContain('casos pequenos');
    expect(text).toContain('Próximo passo');
    expect(text).toContain('retorne aos exercícios');
  });
});
