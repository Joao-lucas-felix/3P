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
    const groupsShell = compiled.querySelector('section[data-testid="exercises-groups"]');
    const totalExercises = exerciseSubcategories.reduce(
      (currentTotal, subcategory) => currentTotal + subcategory.exercises.length,
      0,
    );

    expect(groupsShell).not.toBeNull();
    expect(groupsShell?.className).toContain('bg-slate-950/84');
    expect(compiled.querySelector('h1')?.textContent).toContain('Exercícios');
    expect(text).toContain('Prática guiada por trilhas');
    expect(groupsShell?.textContent).toContain('Exercícios');
    expect(text).toContain(`${exerciseSubcategories.length} subcategorias`);
    expect(text).toContain(`${totalExercises} exercícios`);
  });

  it('should render the main mapped exercise groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';
    const containers = compiled.querySelectorAll('[data-testid="exercise-subcategory"]');
    const listShell = compiled.querySelector('section[data-testid="exercises-groups"]');

    expect(listShell).not.toBeNull();
    expect(text).toContain('Conceitos Básicos');
    expect(text).toContain('Estruturas de Condição');
    expect(text).toContain('Estruturas de Repetição');
    expect(text).toContain('Decomposição');
    expect(text).toContain('Listas');
    expect(text).toContain('Matrizes');
    expect(text).toContain('Strings');
    expect(text).toContain('Matemática');
    expect(text).toContain('Ad-Hoc');
    expect(containers.length).toBe(exerciseSubcategories.length);
  });

  it('should render a small gap between the expandable groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const list = compiled.querySelector('[data-testid="exercise-subcategory-list"]');

    expect(list).not.toBeNull();
    expect(list?.className).toContain('space-y-4');
    expect(list?.className).toContain('xl:space-y-0');
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

  it('should keep responsive grid support and visible focus in the exercises shell', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const groupsShell = compiled.querySelector('[data-testid="exercises-groups"]');
    const list = compiled.querySelector('[data-testid="exercise-subcategory-list"]');
    const firstLink = compiled.querySelector('[data-testid="exercise-subcategory"]') as HTMLElement;

    expect(groupsShell?.className).toContain('rounded-[2.2rem]');
    expect(groupsShell?.className).toContain('md:p-8');
    expect(list?.className).toContain('gap-4');
    expect(firstLink.getAttribute('tabindex')).toBe('0');
  });

  it('should avoid visible placeholder copy in the exercises page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = (compiled.textContent ?? '').toLowerCase();

    expect(text).not.toContain('lorem ipsum');
    expect(text).not.toContain('todo');
    expect(text).not.toContain('placeholder');
  });
});
