import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import {ActiviteService} from "../services/activite.service";
import { MapComponent } from '../map/map.component';
import {LonLat, headingDistanceTo, insideCircle} from 'geolocation-utils'
import {isNull} from "@angular/compiler/src/output/output_ast";
import {Stringifier} from "postcss";
import * as moment from 'moment';


@Component({
  selector: 'app-eventjmactiv',
  templateUrl: './eventjmactiv.component.html',
  styleUrls: ['./eventjmactiv.component.scss']
})

export class EventjmactivComponent implements OnInit, OnChanges {


  @Input() eventCriteria: string;
  @Input() LongitudeCriteria: number;
  @Input() LatitudeCriteria: number;
  @Input() DistanceCriteria: number;
  @Input() StartDateCriteria: string;
  @Input() StartTimeCriteria: string;
  @Input() EndDateCriteria: string;
  @Input() EndTimeCriteria: string;

  events: any[];
  lat: number;
  lng: number;

  constructor(public MapComponent:MapComponent, private activiteService: ActiviteService, private http: HttpClient,private wrapper: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
    console.log("eventjmactiv24")
    console.log(this.eventCriteria);
    this.getActivites();
  }

  ngOnChanges() {
    // create header using child_id
    console.log(this.eventCriteria);
    console.log(this.LongitudeCriteria);
    console.log(this.LatitudeCriteria);
    console.log("distance" + this.DistanceCriteria);
    console.log(this.StartDateCriteria);
    console.log(this.StartTimeCriteria);
    console.log(this.EndDateCriteria);
    console.log(this.EndTimeCriteria);
    this.searchEvent();
  }

  private searchEvent(){
    let startdatetime = moment(this.StartDateCriteria).format("YYYY-MM-DD") + ' ' + moment(this.StartTimeCriteria).format("HH:mm:ss");
    let enddatetime;
    if (!(this.EndDateCriteria === undefined)) {

      let et;
      if (!(this.EndTimeCriteria === undefined)) {
        et = moment(this.EndTimeCriteria).format("HH:mm:ss");
      } else {
        et = "23:59:59";
      }
console.log("et :"  + et);
      enddatetime = moment(this.EndDateCriteria).format("YYYY-MM-DD") + 'T' + et;
    }
    console.log("EndDateCriteria" + this.EndDateCriteria);
    console.log("startdatetime" + startdatetime);
    console.log("enddatetime" + enddatetime);
    //this.getActivites();
    this.searchActivites(startdatetime, enddatetime, this.LatitudeCriteria, this.LongitudeCriteria, this.DistanceCriteria);
  }

  public searchActivites(starttime, enditime, latitude, longitude, distance) {
    this.activiteService.searchActivities(starttime, enditime, latitude, longitude, distance)
        .subscribe((data) => {
          let res: any[] = data.json();
console.log(this.LatitudeCriteria);
console.log(this.LongitudeCriteria);
          for( let i = res.length-1; i--;){
            let e = res[i];
            let activity: any[];

            if(!this.distanceOk(e.location, e.latitude, e.longitude)){
              console.log("K " + e.location);
            //  console.log(e);
              res.splice(i, 1);
            }

          }

          console.log(data);
          this.events = res;
        });
  }
  public getActivites() {
    let newArray: any[] = [];
    let array: any[] = [];
    this.activiteService.getActivities()
        .subscribe((data) => {
          // this.events =  data.json();
         });
      }

  public getDistance(adr:string, dest: any){
      let distance:number;
      const centre = {lat: this.LatitudeCriteria, lon: this.LongitudeCriteria};
      //const dest = //this.getDest(adr);
      distance = headingDistanceTo( centre, dest).distance;
      console.log(distance/1000, " km");
      return distance;

  }
  public getDest(adr:string) {
    let dest: any;
    console.log("adr69:", adr);
    if (adr !== null && adr !== undefined) {
      const [level_1, level_2, state, zip, country] = adr.split(',');
      this.MapComponent.location.address_level_1 = level_1;
      this.MapComponent.location.address_level_2 = level_2;
      this.MapComponent.location.address_state = state;
      this.MapComponent.location.address_zip = zip;
      this.MapComponent.location.address_country = country;
      this.MapComponent.updateOnMap();
      dest = {lat: this.MapComponent.location.lat, lon: this.MapComponent.location.lng};
    } else dest = "error";
    console.log("dest80:", dest);
    return dest;
  }

  private distanceOk( Adre: string, lat: number, lng: number){
    let Max = this.DistanceCriteria;
    const centre = {lat: this.LatitudeCriteria, lon: this.LongitudeCriteria};
    //const dest = this.getDest(Adre);
    const dest ={lat: lat, lon: lng};
    let res1 =  (this.getDistance(Adre, dest) <= Max);
    let res2 =  insideCircle(dest,centre,Max*1000);
    console.log("ok1:",res1,"ok2:", res2);
    return res2;
  }
}
