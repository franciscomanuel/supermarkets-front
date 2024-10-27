import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/home-route/home-route.component').then(
        (c) => c.HomeRouteComponent
      ),
  },
];
