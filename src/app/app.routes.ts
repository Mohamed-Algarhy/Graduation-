<<<<<<< HEAD
=======


>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { ResetPassword } from './core/auth/reset-password/reset-password';
import { ResetSuccess } from './core/auth/reset-success/reset-success';
import { CheckEmail } from './core/auth/check-email/check-email';
<<<<<<< HEAD
import { register } from 'module';

export const routes: Routes = [
  { path: '', component: Register }, // أضف هذا السطر لفتح اللوجن تلقائياً
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'reset-success', component: ResetSuccess },
  { path: 'check-email', component: CheckEmail },
];
=======

export const routes: Routes = [
  { path: '', component: Register },
  { path: 'login', component: Login },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'forget-success', component: ResetSuccess },
  { path: 'check-email', component: CheckEmail },
];
 
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
