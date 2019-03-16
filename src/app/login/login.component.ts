import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string;
  user: SocialUser;
  loggedIn: boolean = false;
  constructor(
    private router: Router,
    private socialAuthService: AuthService) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  public socialLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        let navigationExtras: NavigationExtras = {
          queryParams: {
            name: this.name
          }
        };
        this.router.navigate(['profile'], navigationExtras);
      }
    );
  }
}
