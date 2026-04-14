import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the router outlet shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const shell = compiled.querySelector('[data-testid="app-shell"]');
    const frame = compiled.querySelector('[data-testid="app-shell-frame"]');

    expect(shell).not.toBeNull();
    expect(shell?.className).toContain('app-shell--dark');
    expect(frame?.querySelector('router-outlet')).not.toBeNull();
  });

  it('should preserve a darker shared shell for stronger text contrast', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const shell = compiled.querySelector('[data-testid="app-shell"]');

    expect(shell?.className).toContain('app-shell--dark');
    expect(shell?.className).toContain('app-shell--deeper-dark');
  });

  it('should render shared ambient layers for the new visual base', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const ambient = compiled.querySelector('[data-testid="app-shell-ambient"]');

    expect(ambient).not.toBeNull();
    expect(ambient?.querySelectorAll('.app-shell__orb').length).toBe(2);
    expect(ambient?.querySelector('.app-shell__grid')).not.toBeNull();
  });

  it('should preserve a pixel signature in the shared shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const signature = compiled.querySelector('[data-testid="app-shell-signature"]');

    expect(signature?.className).toContain('font-pixel');
    expect(signature?.textContent).toContain('3P');
  });
});
