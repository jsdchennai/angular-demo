import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core';
import { Credentials } from 'src/app/models';
import { DialogService } from 'src/app/shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private dialogService: DialogService
  ) {}

  submit(credentials: Credentials) {
    this.spinner.show();
    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('userName', response.userName);
        localStorage.setItem('email', response.email);
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/users');
        this.spinner.hide();
      },
      error: (error) => {
        this.spinner.hide();
        this.dialogService.openAlert(error);
      },
    });
  }

  checkUserLoggedIn() {
    let token: string = localStorage.getItem('token');

    if (token != null) {
      this.router.navigateByUrl('/users');
    }
  }

  ngOnInit(): void {
    this.checkUserLoggedIn();
  }
}
