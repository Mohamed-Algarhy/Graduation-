import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
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

  setMessage(text: string) {
    this.message = text;
  }


  onPasswordInput() {
    const r = this.checkRules(this.resetForm.controls.password.value);
    this.ruleLengthMet = r.length;
    this.ruleCharsMet = r.number && r.symbol;
    this.passwordInvalid = false;
    this.setMessage('');
  }

  onConfirmInput() {
    this.confirmInvalid = false;
    this.setMessage('');
  }

  /* ---------- الضغط على Reset Password ---------- */
  onSubmit() {
    const password = this.resetForm.controls.password.value;
    const confirm = this.resetForm.controls.confirm.value;

  
    if (password === '' || confirm === '') {
      this.setMessage('Please fill in both password fields.');
      return;
    }

    const r = this.checkRules(password);

  
    if (!r.length) {
      this.passwordInvalid = true;
      this.setMessage('Password must be at least 8 characters.');
      return;
    }


    if (!r.number) {
      this.passwordInvalid = true;
      this.setMessage('Password must contain at least one number.');
      return;
    }

    
    if (!r.symbol) {
      this.passwordInvalid = true;
      this.setMessage('Password must contain at least one symbol (e.g. @ # $ !).');
      return;
    }

    if (password !== confirm) {
      this.confirmInvalid = true;
      this.setMessage("Passwords don't match.");
      return;
    }

    this.router.navigate(['/reset-success']);
  }
}
=======

@Component({
  selector: 'app-reset-password',
  imports: [],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {}
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
