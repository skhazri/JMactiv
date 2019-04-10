import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  latitude: any;
  longitude: any;


  constructor() { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.latitude = +pos.coords.latitude;
        this.longitude = +pos.coords.longitude;
      });
    }
  }

}
