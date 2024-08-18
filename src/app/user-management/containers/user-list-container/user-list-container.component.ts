import { Component, OnInit } from '@angular/core';
import { Observable, pluck, skip } from 'rxjs';
import { UserService } from 'src/app/core';
import { PaginationRequest, User } from 'src/app/models';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss'],
})
export class UserListContainerComponent implements OnInit {
  users: User[] = [];
  length: number = 0;

  constructor(private userService: UserService) {}

  getUsers(request: any) {
    this.userService.getUsers(request).subscribe({
      next: (response: any) => {
        this.users = response.users;
        this.length = response.total;
      },
      error: (error) => {},
    });
  }

  ngOnInit(): void {
    let initialRequest = { limit: 10, skip: 0 };
    this.getUsers(initialRequest);
  }
}
