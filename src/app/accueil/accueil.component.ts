import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import {MatDialog} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import {Response} from "@angular/http";
import {MatTabsModule, MatTabChangeEvent} from '@angular/material/tabs';
import { ActiviteService } from '../services/activite.service';

export interface GPSData {
  latitude: any;
  longitude: any;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: {latitude: this.parentLatitudeCriteria, longitude: this.parentLongitudeCriteria}
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.parentLongitudeCriteria = result.longitude;
      this.parentLatitudeCriteria = result.latitude;
      this.activiteService.geocode(this.parentLatitudeCriteria,this.parentLongitudeCriteria).subscribe((location) => {
        this.parentLocationCriteria = location.json().results[0].formatted_address;
        console.log(this.parentLocationCriteria);
      });
    });
  }

  user: SocialUser;

  loggedIn: boolean;
  componentActive = 0; //Conserve le numéro du bouton cliquer pour selectionner le bouton actif

  parentEventCriteria="";
  parentLongitudeCriteria=-73.67649939547277;
  parentLatitudeCriteria= 45.58148250928232;
  parentDistanceCriteria=50;
  parentStartDateCriteria = new Date();
  parentStartTimeCriteria = new Date();
  parentEndDateCriteria;
  parentEndTimeCriteria;
  parentLocationCriteria;


  data: [];
  id = {'id': ''};

  constructor(
      public dialog:MatDialog,private router: Router, private socialAuthService: AuthService, private activiteService: ActiviteService) { }


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
      //Les évènements sont affichés peut importe si l'usagé est connecté ou non.
      if (this.loggedIn) {
        this.showEventComp(0);
        };
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
}
