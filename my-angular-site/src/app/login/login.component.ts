import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import {
  AuthService,
  FacebookLoginProvider,
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  email: string;

  constructor( private socialAuthService: AuthService, private router : Router) { }

  public socialLogin() {
    let socialPlatformProvider;


    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          this.name = userData.name;
          this.email = userData.email;
          console.log("facebook sign in data : ", this.name);
            let navigationExtras: NavigationExtras = {
                queryParams: {
                    name: this.name,
                     email: this.email
                }
            };
          this.router.navigate(['toBeNamed'],navigationExtras);
        }
    );
  }
  ngOnInit() {
  }

}
