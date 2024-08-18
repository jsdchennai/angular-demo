import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss'],
})
export class VerticalNavComponent {
  userName = localStorage.getItem('userName');

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  logOut() {
    this.spinner.show();
    localStorage.clear();
    this.router.navigateByUrl('/login');

    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }
}
