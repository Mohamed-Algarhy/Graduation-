<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
=======

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, RouterLink],
=======
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
<<<<<<< HEAD
  email = '';
  errorMessage = '';
  successMessage = '';

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
  }

  clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit(): void {
    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      this.successMessage = '';
      return;
    }

    if (!this.isEmailValid) {
      this.errorMessage = 'Please enter a valid email address.';
      this.successMessage = '';
      return;
    }

    this.errorMessage = '';
    this.successMessage = 'A reset link has been sent to your email.';
    
  }
}
=======
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
  }
}
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
