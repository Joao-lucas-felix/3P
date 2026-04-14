export interface Link {
    route: string,
    routeName: string
}

export const mainNavigationLinks: Link[] = [
    { route: '#/concepts', routeName: 'Conceitos' },
    { route: '#/exercises', routeName: 'Exercícios' },
];

export const footerNavigationLinks: Link[] = [
    { route: '#/home', routeName: 'Início' },
    ...mainNavigationLinks,
];
