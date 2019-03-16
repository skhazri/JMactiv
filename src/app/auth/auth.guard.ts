/**
 *  Angular’s route guards are interfaces which can tell the router whether
 *  or not it should allow navigation to a requested route.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: SocialUser;
  loggedIn: boolean;
  constructor(private socialAuthService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // check if the user is logged in or not
    //You receive a SocialUser object when the user logs in and a null when the user logs out
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    if (this.loggedIn) {
      return true;
    }

    // // navigate to home page
    this.router.navigate(['']);
    return false;
  }
}
