import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { WindowRefService } from './window-ref.service';

export const services = [UserService, AuthService, WindowRefService];

export * from './user.service';
export * from './auth.service';
export * from './window-ref.service';
