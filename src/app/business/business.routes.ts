import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/main-content-route/main-content-route.component').then(
        (c) => c.MainContentRouteComponent
      ),
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./features/product/product.routes').then((c) => c.routes),
      },
    ],
  },
];
