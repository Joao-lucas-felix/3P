import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concepts } from './concepts';

describe('Concepts', () => {
  let component: Concepts;
  let fixture: ComponentFixture<Concepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concepts]
    }).compileComponents();

    fixture = TestBed.createComponent(Concepts);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the concepts page opening', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hero = compiled.querySelector('[data-testid="concepts-hero"]');

    expect(hero).not.toBeNull();
    expect(hero?.className).toContain('bg-slate-950/82');
    expect(compiled.querySelector('h1')?.textContent).toContain('Conceitos');
    expect(compiled.textContent).toContain('entender o que estudar primeiro');
    expect(compiled.textContent).toContain('Escolha uma trilha e avance no seu ritmo');
  });

  it('should render the main content area for concept blocks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main');

    expect(main).not.toBeNull();
    expect(compiled.textContent).toContain('A trilha de conceitos será apresentada aqui');
  });

  it('should explain how to use the page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const guide = compiled.querySelector('[data-testid="concepts-guide"]');

    expect(guide).not.toBeNull();
    expect(compiled.textContent).toContain('Como usar esta página');
    expect(compiled.textContent).toContain('Leia os conceitos na ordem recomendada');
    expect(compiled.textContent).toContain('revisar o conceito e depois praticar');
  });

  it('should render the Conceitos Basicos block', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Conceitos Básicos');
    expect(compiled.textContent).toContain('primeiros passos em programação');
    expect(compiled.textContent).toContain('Leitura de dados');
    expect(compiled.textContent).toContain('Comece por este bloco');
  });

  it('should render the intermediate concept blocks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Estruturas de Condição');
    expect(text).toContain('Estruturas de Repetição');
    expect(text).toContain('Decomposição');
    expect(text).toContain('transformar regras em decisões');
    expect(text).toContain('repetir tarefas sem reescrever os mesmos comandos');
    expect(text).toContain('quebrar um problema maior em partes menores');
  });

  it('should keep the recommended progression order for the first four concepts', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    const basicsIndex = text.indexOf('Conceitos Básicos');
    const conditionsIndex = text.indexOf('Estruturas de Condição');
    const loopsIndex = text.indexOf('Estruturas de Repetição');
    const decompositionIndex = text.indexOf('Decomposição');

    expect(basicsIndex).toBeGreaterThan(-1);
    expect(conditionsIndex).toBeGreaterThan(basicsIndex);
    expect(loopsIndex).toBeGreaterThan(conditionsIndex);
    expect(decompositionIndex).toBeGreaterThan(loopsIndex);
  });

  it('should render a study tip for each of the first four concepts', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Comece por este bloco');
    expect(text).toContain('Depois deste bloco');
    expect(text).toContain('Use este bloco para praticar repetições');
    expect(text).toContain('Avance para este bloco quando');
  });

  it('should render the Listas, Matrizes and Strings blocks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Listas');
    expect(text).toContain('Matrizes');
    expect(text).toContain('Strings');
    expect(text).toContain('coleções de dados');
    expect(text).toContain('linhas e colunas');
    expect(text).toContain('manipulação textual');
  });

  it('should describe expected exercise patterns for the new blocks', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('busca, soma e ordenação');
    expect(text).toContain('diagonais, bordas e regiões');
    expect(text).toContain('palavras, frases e caracteres');
  });

  it('should reduce the number of visible concept cards by grouping related concepts', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = Array.from(compiled.querySelectorAll('main section[data-testid="concept-group"]'));

    const groupSections = sections.filter((section) => section.querySelector('article'));

    expect(groupSections.length).toBe(3);
    expect(groupSections.every((section) => section.querySelector('h2'))).toBe(true);
  });

  it('should render the main concept groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Fundamentos');
    expect(text).toContain('Estruturas e Manipulação');
    expect(text).toContain('Resolução de Problemas');
  });

  it('should keep all nine required concepts visible inside the groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).toContain('Matemática');
    expect(text).toContain('Ad-Hoc');

    const conceptArticles = Array.from(compiled.querySelectorAll('main article'));

    expect(conceptArticles.length).toBe(9);
  });

  it('should render each concept inside a distinct inner card shell', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const conceptCards = Array.from(compiled.querySelectorAll('[data-testid="concept-card"]'));

    expect(conceptCards.length).toBe(9);
    expect(conceptCards.every((card) => card.className.includes('rounded-[1.75rem]'))).toBe(true);
  });

  it('should provide contextual practice calls inside each group', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('main section a'));
    const practiceLinks = links.filter((link) =>
      (link.textContent ?? '').includes('Ver exercícios e resoluções'),
    );

    expect(practiceLinks.length).toBe(9);
    expect(compiled.textContent).toContain('No repositório de exercícios');
  });

  it('should render a closing section that encourages continuity', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const closing = compiled.querySelector('[data-testid="concepts-closing"]');
    const text = compiled.textContent ?? '';

    expect(closing).not.toBeNull();
    expect(text).toContain('Continue sua jornada');
    expect(text).toContain('Escolha um conceito');
    expect(text).toContain('avance para a prática');
    expect(text).toContain('Abrir página do conceito');
  });

  it('should render the compact concept navigation on the concepts page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector('section[data-testid="concept-navigation"]');

    expect(navigation).not.toBeNull();
    expect(navigation?.textContent).toContain('Explorar conceitos');
    expect(navigation?.className).toContain('p-4');
  });

  it('should not expose implementation instructions as visible content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const text = compiled.textContent ?? '';

    expect(text).not.toContain('modal com fundo transparente');
    expect(text).not.toContain('detalhes de implementacao');
    expect(text).not.toContain('solicitacao do usuario');
  });
});
