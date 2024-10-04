import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  
 Router, 
 CanActivateFn,
 CanActivateChildFn} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from './authService/auth.service';


export const canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
  
    return authService.checkLogin().pipe(
      map(() => true),
      catchError((err: any) => {
          return of(router.createUrlTree(['/']));
      })
  );
  };
  
  export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);