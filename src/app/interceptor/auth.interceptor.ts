import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jwt = localStorage.getItem("jwt")
    if (jwt) {
      const cloned = request.clone({ headers: request.headers.append('Authorization', 'Bearer ' + jwt) });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }

  
}
