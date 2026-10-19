
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-email',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './check-email.html',
  styleUrl: './check-email.css',
})
export class CheckEmail {
  digits: string[] = ['', '', '', ''];
  errorMessage = '';
  successMessage = '';

  get isCodeComplete(): boolean {
    return this.digits.every(digit => /^[0-9]$/.test(digit));
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

    this.digits[index] = value;
    input.value = value;

    this.errorMessage = '';
    this.successMessage = '';

    if (value && index < this.digits.length - 1) {
      input.parentElement
        ?.querySelectorAll('input')
        [index + 1]?.focus();
    }
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    if (
      event.key === 'Backspace' &&
      !input.value &&
      index > 0
    ) {
      input.parentElement
        ?.querySelectorAll('input')
        [index - 1]?.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

    const pastedText =
      event.clipboardData?.getData('text') ?? '';

    const numbers = pastedText
      .replace(/\D/g, '')
      .slice(0, 4)
      .split('');

    this.digits = Array.from(
      { length: 4 },
      (_, index) => numbers[index] ?? ''
    );

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
  }

  resendCode(): void {
    this.digits = ['', '', '', ''];
    this.errorMessage = '';
    this.successMessage = 'Please request a new code from the server.';
  }
}
