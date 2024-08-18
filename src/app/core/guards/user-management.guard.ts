import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const userManagementGuard: CanActivateChildFn = (childRoute, state) => {
  let token = localStorage.getItem('token');
  let router = inject(Router);
  if (token) {
    return true;
  }

  router.navigateByUrl('/login');
  return false;
};
