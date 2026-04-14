import { routes } from './app.routes';

describe('app routes', () => {
  it('should define a concepts route', () => {
    const conceptsRoute = routes.find((route) => route.path === 'concepts');

    expect(conceptsRoute).toBeDefined();
    expect(conceptsRoute?.title).toBe('Conceitos');
  });

  it('should define an exercises route', () => {
    const exercisesRoute = routes.find((route) => route.path === 'exercises');

    expect(exercisesRoute).toBeDefined();
    expect(exercisesRoute?.title).toBe('Exercícios');
    expect(exercisesRoute?.loadComponent).toBeDefined();
  });

  it('should define the routes for all concept detail pages', () => {
    const expectedRoutes = [
      { path: 'concepts/basics', title: 'Conceitos Basicos' },
      { path: 'concepts/conditionals', title: 'Estruturas de Condicao' },
      { path: 'concepts/loops', title: 'Estruturas de Repeticao' },
      { path: 'concepts/decomposition', title: 'Decomposicao' },
      { path: 'concepts/lists', title: 'Listas' },
      { path: 'concepts/matrices', title: 'Matrizes' },
      { path: 'concepts/strings', title: 'Strings' },
      { path: 'concepts/math', title: 'Matematica' },
      { path: 'concepts/ad-hoc', title: 'Ad-Hoc' },
    ];

    for (const expectedRoute of expectedRoutes) {
      const route = routes.find((currentRoute) => currentRoute.path === expectedRoute.path);

      expect(route, `route ${expectedRoute.path} should exist`).toBeDefined();
      expect(route?.title).toBe(expectedRoute.title);
      expect(route?.loadComponent, `route ${expectedRoute.path} should lazy load a page`).toBeDefined();
    }
  });
});
