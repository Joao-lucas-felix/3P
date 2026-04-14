import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSubcategoryCard } from './exercise-subcategory';

describe('ExerciseSubcategoryCard', () => {
  let component: ExerciseSubcategoryCard;
  let fixture: ComponentFixture<ExerciseSubcategoryCard>;

  const sampleSubcategory = {
    slug: 'conditionals',
    title: 'Estruturas de Condição',
    description: 'Exercícios de comparação de valores e tomada de decisão.',
    exercises: [
      {
        title: 'Maior de Idade',
        summary: 'Verificar se a idade informada atende a uma regra de classificação.',
        href: 'https://example.com/exercises/conditionals/maior-de-idade',
        subcategory: 'conditionals',
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSubcategoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseSubcategoryCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('subcategory', sampleSubcategory);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the received subcategory title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Estruturas de Condição');
    expect(text).toContain('tomada de decisão');
    expect(text).toContain('1 exercício');
    expect(text).toContain('Abrir exercícios');
  });

  it('should render a larger expandable card shell', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('[data-testid="exercise-subcategory"]');

    expect(container?.className).toContain('p-6');
    expect(container?.className).toContain('rounded-[2rem]');
    expect(container?.className).toContain('bg-slate-950/50');
  });

  it('should expand and collapse when clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('[data-testid="exercise-subcategory"]') as HTMLElement;

    container.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Fechar exercícios');
    expect(compiled.textContent).toContain('Maior de Idade');

    container.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Abrir exercícios');
    expect(compiled.textContent).not.toContain('Maior de Idade');
  });

  it('should render the received exercises when expanded', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('[data-testid="exercise-subcategory"]') as HTMLElement;

    container.click();
    fixture.detectChanges();

    const link = Array.from(compiled.querySelectorAll('a')).find((currentLink) =>
      (currentLink.textContent ?? '').includes('Ver exercício no repositório'),
    );

    expect(compiled.textContent).toContain('Maior de Idade');
    expect(compiled.textContent).toContain('regra de classificação');
    expect(compiled.textContent).toContain('Ver exercício no repositório');
    expect(link?.getAttribute('href')).toContain('conditionals/maior-de-idade');
  });
});
