
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
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
