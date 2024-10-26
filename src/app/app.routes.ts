import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./business/business.routes').then((c) => c.routes),
  },
];
