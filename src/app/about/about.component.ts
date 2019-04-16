import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user: SocialUser;

  loggedIn: boolean;
  constructor(
    private router: Router, private socialAuthService: AuthService) { }


ngOnInit(){
  // Check if user is logged in to Facebook and return a user with its properties
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (user != null) {
        if (user.id != null) {
          this.loggedIn = true; }
        else {
          this.loggedIn = false;
        }
      } else {
        this.loggedIn = false;
      }

    });

}
/**
 * SignOut
 */
public SignOut() {
  this.socialAuthService.signOut();
  this.router.navigate(['']);
}

}
