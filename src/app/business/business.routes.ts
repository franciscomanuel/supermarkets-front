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
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.routes').then((c) => c.routes),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/product/product.routes').then((c) => c.routes),
      },
      {
        path: 'supermarkets',
        loadChildren: () =>
          import('./features/supermarket/supermarket.routes').then(
            (c) => c.routes
          ),
      },
    ],
  },
];
