import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService, SocialUser } from 'angular-6-social-login';
import { FacebookService } from '../services/facebook.service';

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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private socialAuthService: AuthService,
    private facebookService: FacebookService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.getEvents();

  }
  /**
   * 
   */
  public signOut() {
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }
  /**
   * get FB events associated to user 
   */
  public getEvents() {
    this.facebookService.getEvents(this.user.id, this.user.token)
      .subscribe((data) => {
        this.events = (data.json().data);
        console.log(this.events);
      });
  }
}
