import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  get isCodeComplete(): boolean {
    return this.digits.every((digit) => /^[0-9]$/.test(digit));
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

    this.digits[index] = value;
    input.value = value;

    this.errorMessage = '';
    this.successMessage = '';
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {
      this.focusInput(input, index - 1);
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
    this.successMessage = 'Code entered successfully.';
    // TODO: نادي على الـ API هنا بالكود: this.digits.join('')
  }

  resendCode(): void {
    this.digits = ['', '', '', ''];
    this.errorMessage = '';
    this.successMessage = 'A new code has been requested.';
    // TODO: نادي على الـ API بتاع إعادة الإرسال
  }

  private focusInput(current: HTMLInputElement, index: number): void {
    current.parentElement?.querySelectorAll('input')[index]?.focus();
  }
}