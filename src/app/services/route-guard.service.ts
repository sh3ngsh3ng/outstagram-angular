import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public userServ: UserService, public router: Router) { }

  // canActivate(): boolean {
  //   if (!this.userServ.isLoggedOut()) {
  //     console.log(this.userServ.isLoggedIn())
  //     return true;
  //   } else {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  // }
  // canActivate(): boolean {
  //   if (this.userServ.isLoggedIn()) {
  //     // this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.userServ.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
