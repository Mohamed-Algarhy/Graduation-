import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  // standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  errorMessage = '';
  successMessage = '';

  clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit(): void {
    this.clearMessages();

    const emailControl = this.forgotPasswordForm.controls.email;

    emailControl.markAsTouched();

    if (emailControl.hasError('required')) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    if (emailControl.hasError('email')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    // TODO: Connect to the backend API to request a password reset.
    this.successMessage = 'A reset link has been sent to your email.';
  }
}
