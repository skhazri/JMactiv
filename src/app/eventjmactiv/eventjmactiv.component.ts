import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { Observable, of } from "rxjs";
import { map, isEmpty } from 'rxjs/operators';
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
  @Input() UserId: number;

  events: any[];
  lat: number;
  lng: number;

  constructor(public MapComponent:MapComponent, private activiteService: ActiviteService, private http: HttpClient,private wrapper: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
    // console.log("eventjmactiv24")
    // console.log(this.eventCriteria);
    this.getActivites();
  }

  ngOnChanges() {
      console.log("Search jmactiv : " + this.eventCriteria);
      this.searchEvents();
  }

  private searchEvents(){
    let startdatetime;
    if(!(this.StartTimeCriteria === undefined)) {
      startdatetime = moment(this.StartDateCriteria).format("YYYY-MM-DD") + ' ' + moment(this.StartTimeCriteria).format("HH:mm:ss");

    } else {
      startdatetime = moment(this.StartDateCriteria).format("YYYY-MM-DD") ;
    }

    let enddatetime;
    if (!(this.EndDateCriteria === undefined)) {

      let et;
      if (!(this.EndTimeCriteria === undefined)) {
        et = moment(this.EndTimeCriteria).format("HH:mm:ss");
      } else {
        et = "23:59:59";
      }
      enddatetime = moment(this.EndDateCriteria).format("YYYY-MM-DD") + 'T' + et;
    }
    //this.getActivites();
    this.searchActivites(startdatetime, enddatetime);

  }

  public searchActivites(starttime, enditime) {
    this.activiteService.searchActivities(starttime, enditime)
        .subscribe((data) => {
          let res: any[] = data.json();
          if(res.length !== 0) {
            for( let i = res.length; i--;){
              let e = res[i];
              let activity: any[];
              if(!this.distanceOk(e.location, e.latitude, e.longitude)){
                res.splice(i, 1);
              }
            }
            this.events = res;
          }
          else {
            this.events = res;
          }
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
      return distance;

  }
  public getDest(adr:string) {
    let dest: any;
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
    return dest;
  }

  private distanceOk( Adre: string, lat: number, lng: number){
    let Max = this.DistanceCriteria;
    const centre = {lat: this.LatitudeCriteria, lon: this.LongitudeCriteria};
    //const dest = this.getDest(Adre);
    const dest ={lat: lat, lon: lng};
    let res1 =  (this.getDistance(Adre, dest) <= Max);
    let res2 =  insideCircle(dest,centre,Max*1000);
    return res2;
  }

  private WantAttends(eventid:number){

    var eventatt:number[] = new Array(eventid, this.UserId)


    console.log("WantAttends : " + eventatt[0]);
    this.activiteService.postIAttend(eventatt)
      .subscribe(res => {
        console.log("I Attend");
        this.searchEvents();
    }, error => {
      console.log(error);
    });
  }

  private RemoveAttends(eventid:number){

    var eventatt:number[] = new Array(eventid, this.UserId)


    console.log("NotAttends : " + eventatt[0]);
    this.activiteService.postNotAttend(eventatt)
      .subscribe(res => {
        console.log("Not Attend");
        this.searchEvents();
      }, error => {
        console.log(error);
      });

  }


}
