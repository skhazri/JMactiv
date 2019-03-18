import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angular-6-social-login';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  user: SocialUser;
  users: any;
  loggedIn: boolean = false;
  
  constructor(
    private router: Router,
    private socialAuthService: AuthService){}

  ngOnInit() {
    // Check if user is logged in to Facebook and return a user with its properties
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

    });
  }

  /**
   * Se déconnecter de facebook à partir de la page d'Accueil
   */
  public signOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }

}
