import { Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundComponent } from './core/containers/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tenants', pathMatch: 'full' },
  {
    path: 'tenants',
    loadChildren: './tenants/tenants.module#TenantsModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];
