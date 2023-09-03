import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@nx-conduit/conduit/layout/feature').then((m) => m.LayoutComponent),
  }
];
