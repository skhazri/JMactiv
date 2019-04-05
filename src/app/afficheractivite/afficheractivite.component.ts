import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, SocialUser } from 'angular-6-social-login';
import { ActiviteService } from '../services/activite.service';
import { Http, Response } from '@angular/http';
import {map} from "rxjs/operators";
import { CommonModule, NgStyle } from '@angular/common';


@Component({
  selector: 'app-afficheractivite',
  templateUrl: './afficheractivite.component.html',
  styleUrls: ['./afficheractivite.component.scss'],

})
export class AfficheractiviteComponent implements OnInit {

  event: Object;
  user: SocialUser;
  loggedIn: boolean;
  eventFacebook: Object;
  id: number;
  eventbrite: any;

  constructor(private route: ActivatedRoute,
    private facebookService: FacebookService,
    private socialAuthService: AuthService,
    private activiteService: ActiviteService,
    private router: Router,
    private http: Http) { }

  ngOnInit() {
    // get id passed in the url
    this.id = this.route.snapshot.params['id'];
    let type = this.route.snapshot.queryParamMap.get('type');

    // Check if user is logged in to Facebook and return a user with its properties
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    // get facebook event data and format it to json
    // get bd event data and format it to json
    switch (type) {
      case "eventbrite":
        this.getEventbrite();
        break;
      case "facebook":
        this.getFacebookEvent();
        break;
      case "local":
        this.getLocaEvent();
        break;
      case "":
        break;
    }   
  }
  getLocaEvent() {
    this.activiteService.getActivity(this.id)
      .subscribe((data) => {
        this.event = data.json();
      });
  }
  getFacebookEvent() {
    this.facebookService.getEvent(this.id, this.user.token)
      .subscribe((data) => {
        this.eventFacebook = (data.json());

      });
  }
  getEventbrite() {
    let theUrl = 'https://www.eventbriteapi.com/v3/events/?event_ids=' + this.id + '&token=QOFJL3X3PX6VGOTEA24J';
    this.http.get(theUrl)
      .subscribe(data => {
        this.eventbrite = data.json().events[0];
      });
  }  
}
