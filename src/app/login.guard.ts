import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let canActivateStatus = false;

    // If user is logged in then we can activate route // Otherwise we redirect to login page
    if (this.loginService.isTrainerLogged()) {
      canActivateStatus = true;
    } else {
      this.router.navigate(['/login']);
    }
    return canActivateStatus;
  }
}
