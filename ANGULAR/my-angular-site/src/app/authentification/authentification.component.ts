import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  public name: string;
  public email: string;
  constructor( private route: ActivatedRoute,
               private router: Router) {

    console.log(this.name);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.email = params["email"];
      console.log( "hello"+this.name);
    });
  }


}
