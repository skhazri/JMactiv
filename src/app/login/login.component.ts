import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angular-6-social-login';
import { UserService } from '../services/user.service';
import { isNullOrUndefined, isNull } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string;
  user: SocialUser;
  loggedIn: boolean = false;
  id: string;
  userId: any;
  constructor(
    private router: Router,
    private socialAuthService: AuthService,
    private userService :UserService ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  public socialLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        this.id = userData.id;
        this.getUserId(userData.id);           
      }
    );
  }
  getUserId(id) {
    this.userService.get(id).then(
        (res) => {
          this.userId = res;
          if(!isNull(this.userId)) {
         
            let navigationExtras: NavigationExtras = {
              queryParams: {
                name: this.name
              }
            };
            this.router.navigate(['profile'], navigationExtras);
          } else {
            let data = { id: id};
            this.postUser(data);
            let navigationExtras: NavigationExtras = {
              queryParams: {
                name: this.name
              }
            };
            this.router.navigate(['profile'], navigationExtras);
          }  
        });
  }
  postUser(data) {
    this.userService.post(data)
    .subscribe(
        (res) => {
          //console.log(res);
        });
  }
} 
