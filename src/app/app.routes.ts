import { Routes } from '@angular/router';
import { register } from 'node:module';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { ResetPassword } from './core/auth/reset-password/reset-password';
import { ResetSuccess } from './core/auth/reset-success/reset-success';
import { CheckEmail } from './core/auth/check-email/check-email';

export const routes: Routes = [
    {path:`` ,component:Register},
    {path:`login` , component:Login},
    {path:`forget-password` , component:ForgetPassword},
    {path:`reset-password` , component:ResetPassword},
    {path:`reset-success` , component:ResetSuccess},
    {path:`check-email` , component:CheckEmail},
  ];
