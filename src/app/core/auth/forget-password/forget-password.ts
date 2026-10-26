<<<<<<< HEAD
=======
import { Component } from '@angular/core';
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196

import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
=======

import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
<<<<<<< HEAD
  standalone: true,
=======
  // standalone: true,
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
<<<<<<< HEAD
  email = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  submit(): void {
    this.email.markAsTouched();

    if (this.email.invalid) {
      return;
    }

    console.log(
      'Password reset requested for:',
      this.email.value
    );
=======
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
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
  }
}
