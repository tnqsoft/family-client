import { Route } from '@angular/router';
import { AuthGuard } from '../shared';
import { DashboardComponent }    from './dashboard.component';

import { HomeRoutes } from './home';
import { ChangepassRoutes } from './changepass';

// Route Configuration
export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      ...HomeRoutes,
      ...ChangepassRoutes
    ]
  }
];
