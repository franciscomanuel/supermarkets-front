import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/product-list-route/product-list-route.component').then(
        (c) => c.ProductListRouteComponent
      ),
    children: [],
  },
];
