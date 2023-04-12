  import { Injectable } from '@angular/core';
  import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from '../services/auth.service';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService,private router:Router){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree{
        const isLoggedIn = this.auth.isLoggedIn();
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
        }
      }
  }
