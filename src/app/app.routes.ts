// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home';
import { LoginRoutes } from './login';

// Route Configuration
export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  ...HomeRoutes,
  ...LoginRoutes,
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
