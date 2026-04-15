import { Routes } from '@angular/router';
import { Register } from './components/pages/register/register';
import { Login } from './components/pages/login/login';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Users } from './components/pages/users/users';

export const routes: Routes = [

{ path: '', redirectTo: 'login', pathMatch: 'full' },


{ path: 'login', component: Login, title: 'Login' },
{ path: 'register', component: Register, title: 'Registro' },
{ path: 'users', component: Users, title: 'Usuarios' },
{ path: 'dashboard', component: Dashboard, title: 'Dashboard' },

{ path: '**', redirectTo: 'login' }
];
