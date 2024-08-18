import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    if (token != null) {
      return next
        .handle(this.authorize(req, token))
        .pipe(catchError(this.handleError));
    }

    return next.handle(req).pipe(catchError(this.handleError));
  }

  protected authorize(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string = error.error.message;

    if (errorMessage) {
      return throwError(() => errorMessage);
    }

    errorMessage = 'Error occured';
    return throwError(() => errorMessage);
  }
}
