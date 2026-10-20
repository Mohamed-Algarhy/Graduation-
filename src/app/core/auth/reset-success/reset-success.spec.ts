import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ResetSuccess } from './reset-success';

describe('ResetSuccess', () => {
  let component: ResetSuccess;
  let fixture: ComponentFixture<ResetSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetSuccess],
      providers: [provideRouter([])], // مطلوب لأن الصفحة بتستخدم الـ Router / routerLink
    }).compileComponents();

    fixture = TestBed.createComponent(ResetSuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Login button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.submit');
    expect(button).toBeTruthy();
    expect(button.textContent?.trim()).toBe('Login');
  });
});