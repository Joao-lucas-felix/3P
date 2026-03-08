import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/3P/#/home', pathMatch: 'full' },
    {
        path: '/3P/#/home', 
        title: 'Home',
        loadComponent: () => import("./pages/home/home").then( p => p.Home ),
    }
];
