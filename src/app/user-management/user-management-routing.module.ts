import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './containers';
import { UserManagementComponent } from './user-management.component';
import { userManagementGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    canActivateChild: [userManagementGuard],
    children: [
      {
        path: '',
        component: UserListContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
