import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-email',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-email.html',
  styleUrl: './check-email.css',
})
export class CheckEmail {
  digits: string[] = ['', '', '', ''];
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  get isCodeComplete(): boolean {
    return this.digits.every((digit) => /^[0-9]$/.test(digit));
  }

  // مهم مع ngModel: بيمنع أنجولار يعيد رسم الخانة (وتضيع الـ focus) كل ما الرقم يتغير
  trackByIndex(index: number): number {
    return index;
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

    input.value = value;
    this.digits[index] = value;

    this.errorMessage = '';
    this.successMessage = '';
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      input.parentElement?.querySelectorAll('input')[index - 1]?.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const numbers = (event.clipboardData?.getData('text') ?? '')
      .replace(/\D/g, '')
      .slice(0, 4)
      .split('');

    this.digits = Array.from({ length: 4 }, (_, i) => numbers[i] ?? '');

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
    this.successMessage = '';
    // TODO: لو فيه API للتحقق من الكود، انقلي جوه next بتاعه بدل هنا
    this.router.navigate(['/reset-password']);
  }

  resendCode(): void {
    this.digits = ['', '', '', ''];
    this.errorMessage = '';
    this.successMessage = 'A new code has been requested.';
    // TODO: نادي على الـ API بتاع إعادة الإرسال
  }
}