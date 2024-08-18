import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';
import { Credentials } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(credentials: Credentials) {
    if (
      credentials.email !== 'user@gmail.com' ||
      credentials.password !== 'user@123456'
    ) {
      return throwError(() => 'User not found!');
    }

    let response = {
      userName: 'User',
      email: credentials.email,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };

    return of(response).pipe(delay(1000));
  }
}
