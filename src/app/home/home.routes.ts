// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthGuard } from '../shared';
import { HomeComponent }    from './home.component';

// Route Configuration
export const HomeRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];
