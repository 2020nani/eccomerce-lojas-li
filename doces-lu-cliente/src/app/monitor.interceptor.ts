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

export const retryCount = 3;
export const retryWaitMilliSeconds = 5000;

@Injectable()
export class MonitorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.match('http://localhost:3000/teste')) {
      // Do nothing
      return next.handle(request);
    }
    return next.handle(request).pipe(
      retryWhen((error) =>
        error.pipe(
          concatMap((error, count) => {
            if (count <= retryCount && error.status == 404) {
              return of(error);
            }
            return throwError(error);
          }),
          delay(retryWaitMilliSeconds)
        )
      )
    );
  }
}
