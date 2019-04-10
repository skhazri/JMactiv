import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookService } from '../services/facebook.service';
import { ActiviteService } from '../services/activite.service';
import { MatDialog, MatDialogConfig, MatPaginator } from '@angular/material';
import { CreeractiviteComponent } from '../creeractivite/creeractivite.component';
import { UserService } from '../services/user.service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  public name: string;
  user: SocialUser;
  loggedIn: boolean;
  data: [];
  events: [];
  eventsLenght: number;
  currentUrl: string;
  searchText;
  eventsF: [];
  userId: any;
  text: any;
  public errorMessage: string = '';
  public dialogConfig;
  dataSource: object;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private socialAuthService: AuthService,
              private facebookService: FacebookService,
              private activiteService: ActiviteService,
              private userService: UserService,
              private dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
    });
    this.currentUrl = window.location.href;

    this.getFacebookUser();
    this.getUserId();
    this.getEvents();
  }

  /**
   * getFacebook User
   */
  public getFacebookUser() {
    this.socialAuthService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      this.user = user;
    });
  }
  /**
   * getUserId
   */
  getUserId() {
    this.userService.get(this.user.id).then(
        (res) => {
          this.userId = res;
          this.getActivites(this.user.id);
        });
  }

  /**
   * get FB events associated to user
   */
  public getEvents() {
    console.log("authentification:82");
    this.facebookService.getEvents(this.user.id, this.user.authToken)
        .subscribe((data) => {
          this.events = (data.json().data);
        });
  }
  /**
   * get DB events associated to user
   */
  getActivites(id) {
    this.activiteService.get(id)
        .subscribe((data) => {
          this.eventsF = (data.json());
        });
  }

  /**
   * removeEvent()
   */
  public removeEvent(event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = false;
    dialogConfig.width = '350px';
    dialogConfig.height = '200px';
    dialogConfig.data = {
      title: 'Delete Event',
      errorMessage: 'Cannot delete this event. Go to Your fb..',
    };

    this.activiteService.postDelete(event).subscribe(res => {
      this.getActivites(this.user.id);
    }, error => {
      console.log(error);
      this.dialog.open(ErrorComponent,dialogConfig);
    });
  }

  /**
   * updateEvent(event)
   */
  public updateEvent(event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '550px';
    dialogConfig.height = '750px';


    switch (event.endDateTime) {
      case "true":
        event.endDateTime = true;
        break;
      case "false":
        event.endDateTime = false;
    }
    dialogConfig.data = {
      title: 'Update Event',
      event: event,
      update: true,
    };
    console.log(event);
    const dialogRef = this.dialog.open(CreeractiviteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.getActivites(this.userId);
    }, error => {
      console.log("error");
    });
  }

  /**
   * updateFacebookEvent
   */
  public updateFacebookEvent(event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = false;
    dialogConfig.width = '350px';
    dialogConfig.height = '200px';
    dialogConfig.data = {
      title: 'Update Event',
      errorMessage: 'Cannot update this event. Go to Your fb..',
    };
    this.dialog.open(ErrorComponent, dialogConfig);
  }
  /**
   * addEvent()
   */
  addEvent() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '550px';
    dialogConfig.height = '750px';
    dialogConfig.data = {
      title: 'Add Event',
      event: {
        "name": null,
        "location": null,
        "description": null,
        "startDate": null,
        "startTime": null,
        "endDateTime": false,
        "endDate": null,
        "endTime": null,
        "type": 'private',
        "online": 'false',
        "userId": this.userId,
        "image": null,
      }
    };
    const dialogRef = this.dialog.open(CreeractiviteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.getActivites(this.userId);
    });
  }
}
