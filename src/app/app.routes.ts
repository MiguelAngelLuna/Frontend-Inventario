import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard-layout/dashboard-layout').then(m => m.DashboardLayout),
    children: [ 
      {
        path: 'home',
        loadComponent: () => import('./features/dashboard/pages/home/home').then(m => m.Home)
      },
      {
        path: 'inventario',
        loadComponent: () => import('./features/inventory/pages/product-list/product-list').then(m => m.ProductList)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./features/users/pages/user-list/user-list').then(m => m.UserList)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];