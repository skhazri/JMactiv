import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, FacebookLoginProvider } from 'angular-6-social-login';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

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
  /**
   * signOut
   */
  public signOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }
}
