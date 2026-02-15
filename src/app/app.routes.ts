import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/welcome-page/welcome-page').then(m => m.WelcomePage)
  }
];
