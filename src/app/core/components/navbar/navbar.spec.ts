import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the previous blurred navigation shell', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const shell = compiled.querySelector('[data-testid="navbar-shell"]');
    const brand = compiled.querySelector('[data-testid="navbar-brand"]');

    expect(shell).not.toBeNull();
    expect(shell?.className).toContain('backdrop-blur-3xl');
    expect(shell?.className).toContain('border-blue-200/30');
    expect(brand?.className).toContain('font-pixel');
    expect((brand?.textContent ?? '').trim()).toBe('3P');
    expect(compiled.textContent).not.toContain('Primeiros Passos');
  });

  it('should preserve the main navigation links in the previous layout', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('[data-testid="navbar-brand"]');
    const links = Array.from(
      compiled.querySelectorAll('[data-testid="navbar-desktop-links"] a'),
    );

    expect(brand?.getAttribute('href')).toBe('#/home');
    expect(links.map((link) => (link.textContent ?? '').trim())).toEqual([
      'Conceitos',
      'Exercícios',
      'Sobre',
    ]);
    expect(links[0]?.getAttribute('href')).toBe('#/concepts');
    expect(links[1]?.getAttribute('href')).toBe('#/exercises');
    expect(links[2]?.getAttribute('href')).toBe('#');
  });

  it('should keep the simpler mobile menu interaction', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggle = compiled.querySelector('[data-testid="navbar-toggle"]') as HTMLButtonElement;

    expect(compiled.querySelector('[data-testid="navbar-mobile-panel"]')).toBeNull();

    toggle.click();
    fixture.detectChanges();

    const mobileLinks = Array.from(
      compiled.querySelectorAll('[data-testid="navbar-mobile-panel"] a'),
    );

    expect(mobileLinks.length).toBe(3);
    expect(toggle.textContent).toContain('☰');
    expect(compiled.textContent).not.toContain('Explorar agora');
    expect(mobileLinks[0]?.getAttribute('href')).toBe('#/concepts');
    expect(mobileLinks[1]?.getAttribute('href')).toBe('#/exercises');
    expect(mobileLinks[2]?.getAttribute('href')).toBe('#');
  });
});
