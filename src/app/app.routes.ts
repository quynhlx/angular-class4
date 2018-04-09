import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './providers/auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: AuthenticatedComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];
