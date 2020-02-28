import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = localStorage.getItem(AuthService.ID_TOKEN);

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
      const authReq = req.clone({ setHeaders: headersConfig });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
