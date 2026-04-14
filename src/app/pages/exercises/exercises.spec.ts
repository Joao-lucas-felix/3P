import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercises } from './exercises';
import { exerciseSubcategories } from './exercises.data';

describe('Exercises', () => {
  let component: Exercises;
  let fixture: ComponentFixture<Exercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercises],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercises);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title and opening guidance', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';
    const totalExercises = exerciseSubcategories.reduce(
      (currentTotal, subcategory) => currentTotal + subcategory.exercises.length,
      0,
    );

    expect(compiled.querySelector('h1')?.textContent).toContain('Exercícios');
    expect(text).toContain('organiza a prática por subcategorias');
    expect(text).toContain('expandir um grupo por vez');
    expect(text).toContain('Escolha uma subcategoria');
    expect(text).toContain('comparar sua abordagem com a resolução disponível no repositório');
    expect(text).toContain(`${exerciseSubcategories.length} subcategorias reais`);
    expect(text).toContain(`${totalExercises} exercícios iniciais`);
  });

  it('should render the main mapped exercise groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';
    const containers = compiled.querySelectorAll('[data-testid="exercise-subcategory"]');

    expect(text).toContain('Cobertura principal mapeada');
    expect(text).toContain('Conceitos Básicos');
    expect(text).toContain('Estruturas de Condição');
    expect(text).toContain('Estruturas de Repetição');
    expect(text).toContain('Decomposição');
    expect(text).toContain('Listas');
    expect(text).toContain('Matrizes');
    expect(text).toContain('Strings');
    expect(text).toContain('Matemática');
    expect(text).toContain('Ad-Hoc');
    expect(text).toContain('cobertura principal');
    expect(containers.length).toBe(exerciseSubcategories.length);
  });

  it('should render a small gap between the expandable groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const list = compiled.querySelector('[data-testid="exercise-subcategory-list"]');

    expect(list).not.toBeNull();
    expect(list?.className).toContain('space-y-5');
  });

  it('should keep the exercise groups collapsed by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const containers = compiled.querySelectorAll('[data-testid="exercise-subcategory"]');
    const text = compiled.textContent ?? '';

    expect(containers.length).toBe(exerciseSubcategories.length);
    expect(text).toContain('Abrir exercícios');
    expect(text).not.toContain('Hello World');
    expect(text).not.toContain('O Maior');
    expect(text).not.toContain('Pares entre Cinco Números');
    expect(text).not.toContain('Sort Simples');
    expect(text).not.toContain('Calcular a área de um círculo a partir do raio informado.');
  });

  it('should expand the first real exercise group when clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector(
      '[data-testid="exercise-subcategory"]',
    ) as HTMLElement;

    container.click();
    fixture.detectChanges();

    const text = compiled.textContent ?? '';
    const link = Array.from(compiled.querySelectorAll('a')).find((currentLink) =>
      (currentLink.textContent ?? '').includes('Ver exercício no repositório'),
    );

    expect(text).toContain('Hello World');
    expect(text).toContain('Extremamente Básico');
    expect(text).toContain('Área do Círculo');
    expect(text).toContain('Exibir a mensagem "Hello World!" exatamente como pedida.');
    expect(link?.getAttribute('href')).toContain('01_CONCEITOS_BASICOS/1000HelloWorld');
  });
});
