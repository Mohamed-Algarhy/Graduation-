import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly title = signal('nevora-frontend');
  showPassword = false;

togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}
  onSignIn(event: Event, email: string, password: string): void {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Please enter your email and password.');
      return;
    }

    alert('The form is ready. Login connection comes later.');
  }
}
