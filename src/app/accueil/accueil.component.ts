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
  loggedIn: boolean = false;
  componentActive = 0; //Conserve le numéro du bouton cliquer pour selectionner le bouton actif

  parentEventCriteria = "hockey";
  facebookService: any;
  data: [];
  id = {'id': ''};

  constructor(
      private router: Router, private socialAuthService: AuthService) { }

  ngOnInit() {
    // Check if user is logged in to Facebook and return a user with its properties
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
      this.showEventComp(0);
    });
  }
  /**
   * SignOut
   */
  public SignOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }

  /**
   * Affiche le component selon le paramètre reçu
   * */
  private showEventComp(compVisible){
    document.getElementById("appEventJMactiv").style.display = (compVisible == 0) ? "block" : "none" ;
    document.getElementById("appEventEventbrite").style.display = (compVisible == 1) ? "block" : "none";
    this.componentActive = compVisible;
  }

  /**
   * Retourne la couleur du bouton selon si le component qui lui est relié est visible ou non
   * */
  private set_color(compSelect){
    return (compSelect == this.componentActive ) ? "primary" : "basic";

  }

  private searchEvents(){

  }
}
