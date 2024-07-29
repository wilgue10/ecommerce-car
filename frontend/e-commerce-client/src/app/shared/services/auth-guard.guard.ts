import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map(auth => {
        if (auth) {
          return true; // Allow access to the route if authenticated
        } else {
          console.log('not authenticated');
        
          return false; // Deny access to the route if not authenticated
        }
      })
    );
  }
}