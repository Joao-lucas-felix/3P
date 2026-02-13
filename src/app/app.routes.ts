import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        title: 'Home',
        loadComponent: () => import("./pages/home/home").then( p => p.Home ),
    }
];
