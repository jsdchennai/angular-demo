import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomErrorStateMatcher } from 'src/app/utils';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('user@gmail.com', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('user@123456', Validators.required),
  });

  matcher = new CustomErrorStateMatcher();

  @Output() submitted = new EventEmitter();

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitted.emit(this.loginForm.value);
    }
  }
}
