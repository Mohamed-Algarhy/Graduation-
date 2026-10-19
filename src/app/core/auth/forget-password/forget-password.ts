import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  digits: string[] = ['', '', '', ''];
  errorMessage: string = '';
  successMessage: string = '';

  get isCodeComplete(): boolean {
    return this.digits.every((d) => d.trim().length === 1);
  }

  onDigitInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '');
    this.digits[index] = value ? value[value.length - 1] : '';

    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  }

  onDigitKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text').trim() || '';
    const numbersOnly = pastedData.replace(/[^0-9]/g, '').slice(0, 4);

    for (let i = 0; i < 4; i++) {
      this.digits[i] = numbersOnly[i] || '';
    }

    const nextIndex = Math.min(numbersOnly.length, 3);
    const targetInput = document.getElementById(`code-${nextIndex}`) as HTMLInputElement;
    targetInput?.focus();
  }

  onSubmit(): void {
    if (!this.isCodeComplete) return;
    const verificationCode = this.digits.join('');
    console.log('Verification Code Submitted:', verificationCode);
  }

  resendCode(): void {
    this.successMessage = 'A new code has been sent to your email.';
    this.errorMessage = '';
  }
}