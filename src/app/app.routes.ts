import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', 
        title: 'Home',
        loadComponent: () => import("./pages/home/home").then( p => p.Home ),
    }
];
