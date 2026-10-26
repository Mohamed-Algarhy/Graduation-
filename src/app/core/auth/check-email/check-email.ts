<<<<<<< HEAD

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196

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

<<<<<<< HEAD
  get isCodeComplete(): boolean {
    return this.digits.every(digit => /^[0-9]$/.test(digit));
=======
  constructor(private router: Router) {}

  get isCodeComplete(): boolean {
    return this.digits.every((digit) => /^[0-9]$/.test(digit));
  }

  // Prevents Angular from recreating the input and losing focus.
  trackByIndex(index: number): number {
    return index;
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

<<<<<<< HEAD
    this.digits[index] = value;
    input.value = value;

=======
    input.value = value;
    this.digits[index] = value;
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
    this.errorMessage = '';
    this.successMessage = '';

    // Move focus to the next input after entering a digit.
    if (value && index < this.digits.length - 1) {
      input.parentElement?.querySelectorAll('input')[index + 1]?.focus();
    }
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

<<<<<<< HEAD
    if (
      event.key === 'Backspace' &&
      !input.value &&
      index > 0
    ) {
      input.parentElement
        ?.querySelectorAll('input')
        [index - 1]?.focus();
=======
    if (event.key === 'Backspace' && !input.value && index > 0) {
      input.parentElement?.querySelectorAll('input')[index - 1]?.focus();
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();

<<<<<<< HEAD
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
=======
    const pastedText = event.clipboardData?.getData('text') ?? '';
    const numbers = pastedText.replace(/\D/g, '').slice(0, 4).split('');

    this.digits = Array.from({ length: 4 }, (_, index) => numbers[index] ?? '');
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196

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
    this.successMessage = 'Code entered successfully.';
=======
    this.successMessage = '';

    // TODO: Verify the code with the backend API before navigating.
    this.router.navigate(['/reset-password']);
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
  }

  resendCode(): void {
    this.digits = ['', '', '', ''];
    this.errorMessage = '';
<<<<<<< HEAD
    this.successMessage = 'Please request a new code from the server.';
=======
    this.successMessage = 'A new code has been requested.';

    // TODO: Call the backend API to resend the code.
>>>>>>> bdfdf48c8736f079d62b92b35a6497a751fcb196
  }
}
