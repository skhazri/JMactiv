import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook);

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  currentUrl: String;
  constructor(private router: Router) { }

  ngOnInit() {
    // get current url
    // this.currentUrl = "https://jmactiv-web.herokuapp.com" + this.router.url;

    //uncomment when depolyment
    this.currentUrl = window.location.href;
  }

}
