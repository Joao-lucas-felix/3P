import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the redesigned footer shell with study guidance', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const shell = compiled.querySelector('[data-testid="footer-shell"]');
    const title = compiled.querySelector('[data-testid="footer-title"]');

    expect(shell).not.toBeNull();
    expect(shell?.className).toContain('backdrop-blur-xl');
    expect(shell?.className).toContain('border-cyan-400/15');
    expect(shell?.className).toContain('bg-slate-950/88');
    expect(title?.className).toContain('font-pixel');
    expect(compiled.textContent).toContain('Continue sua jornada');
  });

  it('should preserve the complementary navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('[data-testid="footer-links"] a'));

    expect(links.map((link) => (link.textContent ?? '').trim())).toEqual([
      'Início',
      'Conceitos',
      'Exercícios',
      'Sobre',
    ]);
    expect(links[0]?.getAttribute('href')).toBe('#/home');
    expect(links[1]?.getAttribute('href')).toBe('#/concepts');
    expect(links[2]?.getAttribute('href')).toBe('#/exercises');
    expect(links[3]?.getAttribute('href')).toBe('#');
  });

  it('should reinforce the educational context in the redesigned footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Programação: Primeiros Passos');
    expect(text).toContain('simples, prática e gradual');
    expect(text).toContain('© 2026');
  });
});
