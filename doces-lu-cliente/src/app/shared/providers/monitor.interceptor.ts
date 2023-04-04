import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {
  Observable,
  concatMap,
  delay,
  of,
  retry,
  retryWhen,
  throwError,
} from 'rxjs';

@Injectable()
export class MonitorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken = localStorage.getItem('token');

    if (idToken && !request.url.includes('/login')) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', idToken),
      });

      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
