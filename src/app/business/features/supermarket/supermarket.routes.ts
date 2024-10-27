import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './routes/supermarket-list-route/supermarket-list-route.component'
      ).then((c) => c.SupermarketListRouteComponent),
    children: [],
  },
];
