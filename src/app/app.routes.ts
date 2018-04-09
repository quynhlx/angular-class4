import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './providers/auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: AuthenticatedComponent, // nếu có children phải có router-outlet
    canActivate: [AuthGuard],
    children: [
      { path: 'files', loadChildren: './files-manager/files-manager.module#FilesManagerModule' },
      { path: '', redirectTo: '/files', pathMatch: 'full' },
    ]
  },

  { path: '**', component: NotFoundComponent },
];
