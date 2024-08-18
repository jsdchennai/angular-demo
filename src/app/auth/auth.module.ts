import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [...components, ...containers],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
