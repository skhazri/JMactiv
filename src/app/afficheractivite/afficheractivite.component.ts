import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, SocialUser } from 'angular-6-social-login';
import { ActiviteService } from '../services/activite.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-afficheractivite',
  templateUrl: './afficheractivite.component.html',
  styleUrls: ['./afficheractivite.component.scss']
})
export class AfficheractiviteComponent implements OnInit {

  event: Object;
  user: SocialUser;
  loggedIn: boolean;
  isOnline: boolean;
  eventFacebook: Object;

  constructor(private route: ActivatedRoute,
    private facebookService: FacebookService,
    private socialAuthService: AuthService,
    private activiteService: ActiviteService,
    private router: Router) { }

  ngOnInit() {
    // get id passed in the url
    let id = this.route.snapshot.params['id'];

    // Check if user is logged in to Facebook and return a user with its properties
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    // get facebook event data and format it to json
    // get bd event data and format it to json
    this.activiteService.getActivity(id)
      .subscribe((data) => {
        if (isUndefined(data.json().online)) {
          this.isOnline = true;
          this.facebookService.getEvent(id, this.user.token)
            .subscribe((data) => {
              this.eventFacebook = (data.json());
            });

        } else {
          this.isOnline = data.json().online;
          this.event = data.json();
        }
      });
  }
}
