import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  registerForm = new FormGroup(
    {
      // first name valdation ============================================
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z/s]+$/),
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      // last name valdation ============================================
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      // email valdation ============================================
      email: new FormControl('', [Validators.required, Validators.email]),
      // =========================================
      number: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
      // =========================================
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // ===========================================
      confirmPassword: new FormControl('', [Validators.required]),
      // ++++++++++=================================
      rememberMe: new FormControl(false),
    },
    { validators: this.passwordMatchValidator },
  );

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    // return password === confirmPassword ? null : { mismatch: true };
    if (password != confirmPassword) {
      control.get(`confirmPassword`)?.setErrors({ mismatch: true });
      return { mismatch: true };
    }else
    {
      return null
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
