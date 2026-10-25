import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideRouter } from '@angular/router';
=======
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d

import { ResetSuccess } from './reset-success';

describe('ResetSuccess', () => {
  let component: ResetSuccess;
  let fixture: ComponentFixture<ResetSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetSuccess],
<<<<<<< HEAD
      providers: [provideRouter([])], // مطلوب لأن الصفحة بتستخدم الـ Router / routerLink
=======
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
    }).compileComponents();

    fixture = TestBed.createComponent(ResetSuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

  it('should show the Login button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.submit');
    expect(button).toBeTruthy();
    expect(button.textContent?.trim()).toBe('Login');
  });
});
=======
});
>>>>>>> 0509fbb32ae286780b996381c0403fe3ce69d99d
