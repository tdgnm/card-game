import { Component } from '@angular/core';
import { NzCardComponent } from "ng-zorro-antd/card";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RouterLink } from '@angular/router';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzCardComponent,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    RouterLink,
    NzIconDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  validateForm;
  passwordVisible = false;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
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
}
