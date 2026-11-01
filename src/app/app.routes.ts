import { Routes } from '@angular/router';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { ResetPassword } from './core/auth/reset-password/reset-password';
import { ResetSuccess } from './core/auth/reset-success/reset-success';
import { CheckEmail } from './core/auth/check-email/check-email';
import { register } from 'module';
import { Home } from './feature/main/home/home';
import path from 'path';
import { Main } from './feature/main/main';

export const routes: Routes = [
  { path: '', component: Register }, // أضف هذا السطر لفتح اللوجن تلقائياً
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'reset-success', component: ResetSuccess },
  { path: 'check-email', component: CheckEmail },
  {
    path: ``,
    component: Main,
    children: [
      {
        path: `home`,
        loadComponent: () => import(`./feature/main/home/home`).then((m) => m.Home),
      },
      {
        path: `about-us`,
        loadComponent: () => import(`./feature/main/about-us/about-us`).then((m) => m.AboutUs),
      },
      {
        path: `contact`,
        loadComponent: () => import(`./feature/main/contact/contact`).then((m) => m.Contact),
      },
      {
        path: `property`,
        loadComponent: () => import(`./feature/main/property/property`).then((m) => m.Property),
      },
      {
        path: `**`,
        loadComponent: () => import(`./feature/main/notfound/notfound`).then((m) => m.Notfound),
      },
    ],
  },
  //  path: ``,
  //   component: Home,
  //   children: [
  //     {
  //       path: `feed`,
  //        loadComponent: () => import(`./features/main/feed/feed`).then((m) => m.Feed),
  //     },
];
