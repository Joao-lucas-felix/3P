import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the redesigned hero opening', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('[data-testid="home-hero"]');

    expect(hero).not.toBeNull();
    expect(hero?.className).toContain('bg-slate-950/82');
    expect(compiled.textContent).toContain('Programação: Primeiros Passos');
    expect(compiled.textContent).toContain('Seu primeiro mapa para entrar em programação');
    expect(compiled.textContent).toContain('Explorar conceitos');
  });

  it('should render clearer next steps for concepts and exercises', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nextSteps = compiled.querySelector('[data-testid="home-next-steps"]');
    const links = Array.from(nextSteps?.querySelectorAll('a') ?? []);

    expect(nextSteps).not.toBeNull();
    expect(nextSteps?.textContent).toContain('Começar pelos conceitos');
    expect(nextSteps?.textContent).toContain('Ir para os exercícios');
    expect(links[0]?.getAttribute('href')).toBe('#/concepts');
    expect(links[1]?.getAttribute('href')).toBe('#/exercises');
  });

  it('should explain the study flow for beginners', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const studyFlow = compiled.querySelector('[data-testid="home-study-flow"]');

    expect(studyFlow).not.toBeNull();
    expect(studyFlow?.textContent).toContain('Como estudar aqui');
    expect(studyFlow?.textContent).toContain('Entenda a ideia');
    expect(studyFlow?.textContent).toContain('Pratique em problemas reais');
    expect(studyFlow?.textContent).toContain('Compare sua solução');
  });

  it('should connect the hero text to the mascot with a centered speech triangle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mascot = compiled.querySelector('[data-testid="home-hero-mascot"]');
    const triangle = compiled.querySelector('[data-testid="home-hero-triangle"]');

    expect(mascot).not.toBeNull();
    expect(mascot?.className).not.toContain('bg-slate-950/80');
    expect(triangle).not.toBeNull();
    expect(triangle?.className).toContain('border-t-cyan-200/30');
  });

  it('should preserve responsive spacing and visible focus states in the hero actions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('[data-testid="home-hero"]');
    const links = Array.from(compiled.querySelectorAll('[data-testid="home-hero"] a'));
    const heroGrid = hero?.querySelector('.relative.z-10');

    expect(heroGrid?.className).toContain('lg:grid-cols-[1.2fr_0.9fr]');
    expect(links.length).toBeGreaterThanOrEqual(2);
    expect(links.every((link) => (link.getAttribute('href') ?? '').startsWith('#/'))).toBe(true);
    expect(links.every((link) => link.className.includes('transition'))).toBe(true);
  });
});
