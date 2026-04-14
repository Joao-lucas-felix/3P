import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', 
        title: 'Home',
        loadComponent: () => import("./pages/home/home").then( p => p.Home ),
    },
    {
        path: 'concepts',
        title: 'Conceitos',
        loadComponent: () => import('./pages/concepts/concepts').then((p) => p.Concepts),
    },
    {
        path: 'exercises',
        title: 'Exercícios',
        loadComponent: () => import('./pages/exercises/exercises').then((p) => p.Exercises),
    },
    {
        path: 'concepts/basics',
        title: 'Conceitos Basicos',
        loadComponent: () => import('./pages/concepts/pages/basics/basics').then((p) => p.BasicsConceptPage),
    },
    {
        path: 'concepts/conditionals',
        title: 'Estruturas de Condicao',
        loadComponent: () => import('./pages/concepts/pages/conditionals/conditionals').then((p) => p.ConditionalsConceptPage),
    },
    {
        path: 'concepts/loops',
        title: 'Estruturas de Repeticao',
        loadComponent: () => import('./pages/concepts/pages/loops/loops').then((p) => p.LoopsConceptPage),
    },
    {
        path: 'concepts/decomposition',
        title: 'Decomposicao',
        loadComponent: () => import('./pages/concepts/pages/decomposition/decomposition').then((p) => p.DecompositionConceptPage),
    },
    {
        path: 'concepts/lists',
        title: 'Listas',
        loadComponent: () => import('./pages/concepts/pages/lists/lists').then((p) => p.ListsConceptPage),
    },
    {
        path: 'concepts/matrices',
        title: 'Matrizes',
        loadComponent: () => import('./pages/concepts/pages/matrices/matrices').then((p) => p.MatricesConceptPage),
    },
    {
        path: 'concepts/strings',
        title: 'Strings',
        loadComponent: () => import('./pages/concepts/pages/strings/strings').then((p) => p.StringsConceptPage),
    },
    {
        path: 'concepts/math',
        title: 'Matematica',
        loadComponent: () => import('./pages/concepts/pages/math/math').then((p) => p.MathConceptPage),
    },
    {
        path: 'concepts/ad-hoc',
        title: 'Ad-Hoc',
        loadComponent: () => import('./pages/concepts/pages/ad-hoc/ad-hoc').then((p) => p.AdHocConceptPage),
    },
];
