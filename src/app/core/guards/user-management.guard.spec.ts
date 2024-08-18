import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { userManagementGuard } from './user-management.guard';

describe('userManagementGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userManagementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
