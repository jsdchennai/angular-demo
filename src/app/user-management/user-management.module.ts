import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';

import { components } from './components';
import { containers } from './containers';
import { SharedModule } from '../shared';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  declarations: [...components, ...containers, UserManagementComponent],
  imports: [UserManagementRoutingModule, SharedModule],
})
export class UserManagementModule {}
