import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {GPSData} from "../accueil/accueil.component";
import {google} from "@agm/core/services/google-maps-types";


@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  latitude: any;
  longitude: any;


  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GPSData) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = +pos.coords.latitude;
        this.longitude = +pos.coords.longitude;
      }, error =>{
        switch (error.code) {
          case 1:
            //console.log('Permission Denied');
            this.latitude = 45.509324;
            this.longitude = -73.568179;
            this.data.latitude = this.latitude;
            this.data.longitude = this.longitude;
            break;
          case 2:
            console.log('Position Unavailable');
            break;
          case 3:
            console.log('Timeout');
            break;
        }
      })
    }
  }

  onChoseLocation($event){
    this.data.latitude = $event.coords.lat;
    this.data.longitude = $event.coords.lng;

    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;

  }

  setGPSCoord() {

    this.dialogRef.close(this.data);
  }
  unSetGPSCoord() {
    this.data.latitude = 0;
    this.data.longitude = 0;
    this.dialogRef.close(this.data);
  }
  onClose() {
    if ((this.data.latitude == this.latitude) && (this.data.longitude == this.longitude))
    {
      console.log("close mydial sans modif");
      this.dialogRef.close();
    } else {
      console.log("close mydial avec modif poser question");

    }
  }



}
