import { Component } from '@angular/core';
import { NzCardComponent } from "ng-zorro-antd/card";
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzCardComponent,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    RouterLink,
    NgIf,
    NzTypographyComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  validateForm;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    }, { validators: this.passwordValidator() });
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      // TODO: submit
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if (password && confirmPassword && password !== confirmPassword) {
        return { mismatch: true };
      }
      return null;
    };
  }

  get passwordError(): boolean {
    return this.validateForm.hasError('mismatch');
  }
}
