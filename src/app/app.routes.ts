import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing.component').then((m) => m.LandingComponent),
    title: '@notiz/ngx-markdoc',
  },
  {
    path: 'docs/:slug',
    loadComponent: () =>
      import('./pages/docs.component').then((m) => m.DocsComponent),
  },
];
