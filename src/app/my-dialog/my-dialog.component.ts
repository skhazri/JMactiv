import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {GPSData} from "../accueil/accueil.component";


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
      navigator.geolocation.getCurrentPosition( pos => {
        console.log(pos);
        this.latitude = +pos.coords.latitude;
        this.longitude = +pos.coords.longitude;
      });
    }
  }

  onChoseLocation($event){
    this.data.latitude = $event.coords.lat;
    this.data.longitude = $event.coords.lng;
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
    this.dialogRef.close();
  }



}
