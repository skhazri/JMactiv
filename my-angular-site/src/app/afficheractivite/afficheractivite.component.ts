import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService, SocialUser } from 'angular-6-social-login';

@Component({
  selector: 'app-afficheractivite',
  templateUrl: './afficheractivite.component.html',
  styleUrls: ['./afficheractivite.component.scss']
})
export class AfficheractiviteComponent implements OnInit {

  event: Object;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private route: ActivatedRoute,
    private facebookService: FacebookService,
    private socialAuthService: AuthService) { }

  ngOnInit() {
    // get id passed in the url
    let id = this.route.snapshot.params['id'];
    // Check if user is logged in to Facebook and return a user with its properties

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    // get event data and format it to json
    this.facebookService.getEvent(id, this.user.token)
      .subscribe((data) => {
        this.event = (data.json());
      });
  }
}
