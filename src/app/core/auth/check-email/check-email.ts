<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
=======

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d

@Component({
  selector: 'app-check-email',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule],
=======
  imports: [CommonModule, FormsModule, RouterLink],
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
  templateUrl: './check-email.html',
  styleUrl: './check-email.css',
})
export class CheckEmail {
  digits: string[] = ['', '', '', ''];
  errorMessage = '';
  successMessage = '';

<<<<<<< HEAD
  constructor(private router: Router) {}

  get isCodeComplete(): boolean {
    return this.digits.every((digit) => /^[0-9]$/.test(digit));
  }

  // مهم مع ngModel: بيمنع أنجولار يعيد رسم الخانة (وتضيع الـ focus) كل ما الرقم يتغير
  trackByIndex(index: number): number {
    return index;
=======
  get isCodeComplete(): boolean {
    return this.digits.every(digit => /^[0-9]$/.test(digit));
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

<<<<<<< HEAD
    input.value = value;
    this.digits[index] = value;

    this.errorMessage = '';
    this.successMessage = '';
=======
    this.digits[index] = value;
    input.value = value;

    this.errorMessage = '';
    this.successMessage = '';

    if (value && index < this.digits.length - 1) {
      input.parentElement
        ?.querySelectorAll('input')
        [index + 1]?.focus();
    }
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

<<<<<<< HEAD
    if (event.key === 'Backspace' && !input.value && index > 0) {
      input.parentElement?.querySelectorAll('input')[index - 1]?.focus();
=======
    if (
      event.key === 'Backspace' &&
      !input.value &&
      index > 0
    ) {
      input.parentElement
        ?.querySelectorAll('input')
        [index - 1]?.focus();
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

<<<<<<< HEAD
    const numbers = (event.clipboardData?.getData('text') ?? '')
=======
    const pastedText =
      event.clipboardData?.getData('text') ?? '';

    const numbers = pastedText
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
      .replace(/\D/g, '')
      .slice(0, 4)
      .split('');

<<<<<<< HEAD
    this.digits = Array.from({ length: 4 }, (_, i) => numbers[i] ?? '');
=======
    this.digits = Array.from(
      { length: 4 },
      (_, index) => numbers[index] ?? ''
    );
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d

    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit(): void {
    if (!this.isCodeComplete) {
      this.errorMessage = 'Please enter the complete 4-digit code.';
      this.successMessage = '';
      return;
    }

    this.errorMessage = '';
<<<<<<< HEAD
    this.successMessage = '';
    // TODO: لو فيه API للتحقق من الكود، انقلي جوه next بتاعه بدل هنا
    this.router.navigate(['/reset-password']);
=======
    this.successMessage = 'Code entered successfully.';
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
  }

  resendCode(): void {
    this.digits = ['', '', '', ''];
    this.errorMessage = '';
<<<<<<< HEAD
    this.successMessage = 'A new code has been requested.';
    // TODO: نادي على الـ API بتاع إعادة الإرسال
  }
}
=======
    this.successMessage = 'Please request a new code from the server.';
  }
}
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
