import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  resetForm = new FormGroup({
    password: new FormControl('', { nonNullable: true }),
    confirm: new FormControl('', { nonNullable: true }),
  });

  showPassword = false;
  showConfirm = false;

  message = '';

  passwordInvalid = false;
  confirmInvalid = false;

  ruleLengthMet = false;
  ruleCharsMet = false;

  constructor(private router: Router) {}

  checkRules(value: string) {
    return {
      length: value.length >= 8,
      number: /\d/.test(value),
      symbol: /[^A-Za-z0-9]/.test(value),
    };
  }

  setMessage(text: string): void {
    this.message = text;
  }

  onPasswordInput(): void {
    const password = this.resetForm.controls.password.value;
    const rules = this.checkRules(password);

    this.ruleLengthMet = rules.length;
    this.ruleCharsMet = rules.number && rules.symbol;

    this.passwordInvalid = false;
    this.confirmInvalid = false;

    this.setMessage('');
  }

  onConfirmInput(): void {
    this.confirmInvalid = false;
    this.setMessage('');
  }

  onSubmit(): void {
    const password = this.resetForm.controls.password.value;
    const confirm = this.resetForm.controls.confirm.value;

    this.passwordInvalid = false;
    this.confirmInvalid = false;
    this.setMessage('');

    if (password === '' || confirm === '') {
      if (password === '') {
        this.passwordInvalid = true;
      }

      if (confirm === '') {
        this.confirmInvalid = true;
      }

      this.setMessage('Please fill in both password fields.');
      return;
    }

    const rules = this.checkRules(password);

    if (!rules.length) {
      this.passwordInvalid = true;
      this.setMessage('Password must be at least 8 characters.');
      return;
    }

    if (!rules.number) {
      this.passwordInvalid = true;
      this.setMessage('Password must contain at least one number.');
      return;
    }

    if (!rules.symbol) {
      this.passwordInvalid = true;
      this.setMessage('Password must contain at least one symbol (e.g. @ # $ !).');
      return;
    }

    if (password !== confirm) {
      this.confirmInvalid = true;
      this.setMessage("Passwords don't match.");
      return;
    }

    // الانتقال لصفحة النجاح بعد اجتياز التحقق.
    this.router.navigate(['/reset-success']);
  }
}
