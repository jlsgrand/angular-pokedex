import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // For each http request add user token as a header in case it exists in session storage.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (sessionStorage.getItem(LoginService.TRAINER_TOKEN)) {
      authReq = req.clone({
        setHeaders: {'X-Authorization': JSON.parse(sessionStorage.getItem(LoginService.TRAINER_TOKEN)).token}
      });
    }

    return next.handle(authReq);
  }
}
