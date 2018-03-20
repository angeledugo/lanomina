import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './_layout/auth/auth-layout.component';
import { AdminLayoutComponent } from './_layout/admin/admin-layout.component';
export const AppRoutes: Routes = [
  { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'simple-page',
        loadChildren: './simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './administrativo/administrativo.module#AdministrativoModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'companies',
        loadChildren: './companies/companies.module#CompaniesModule'
      }
    ]
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  { path: '**', redirectTo: '/authentication/login', pathMatch: 'full' },
];



