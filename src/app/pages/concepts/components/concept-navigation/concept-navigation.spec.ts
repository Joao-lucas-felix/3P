import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptNavigation } from './concept-navigation';

describe('ConceptNavigation', () => {
  let component: ConceptNavigation;
  let fixture: ComponentFixture<ConceptNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptNavigation);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('currentSlug', 'loops');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a collapsed navigation shell with blur styling', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector('section[data-testid="concept-navigation"]');

    expect(navigation).not.toBeNull();
    expect(navigation?.className).toContain('backdrop-blur-3xl');
    expect(navigation?.textContent).toContain('Explorar conceitos');
    expect(compiled.querySelector('button')).toBeNull();
    expect(compiled.textContent).not.toContain('Conceitos Básicos');
  });

  it('should expand to reveal the concept links when the component is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector(
      'section[data-testid="concept-navigation"]',
    ) as HTMLElement;

    navigation.click();
    fixture.detectChanges();

    const links = Array.from(compiled.querySelectorAll('a'));

    expect(links.length).toBe(9);
    expect(compiled.textContent).toContain('Conceitos Básicos');
    expect(compiled.textContent).toContain('Estruturas de Repetição');
    expect(compiled.textContent).toContain('Ad-Hoc');
  });

  it('should visually highlight the current concept when expanded', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector(
      'section[data-testid="concept-navigation"]',
    ) as HTMLElement;

    navigation.click();
    fixture.detectChanges();

    const currentLink = Array.from(compiled.querySelectorAll('a')).find(
      (link) => (link.textContent ?? '').trim() === 'Estruturas de Repetição',
    );

    expect(currentLink?.getAttribute('aria-current')).toBe('page');
    expect(currentLink?.className).toContain('bg-blue-400/20');
  });

  it('should render in a more compact format', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector('section[data-testid="concept-navigation"]');

    expect(navigation?.className).toContain('p-4');
  });
});
