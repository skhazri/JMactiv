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
  }

  public getActivites() {
    let newArray: any[] = [];
    let array: any[] = [];
    this.activiteService.getActivities()
        .subscribe((data) => {
           this.events =  data.json();
         });
      }


  public getDistance(adr:string, max:number){
      let distance:number;
      const centre = {lat: this.LatitudeCriteria, lon: this.LongitudeCriteria};
      const dest = this.getDest(adr);
      distance = headingDistanceTo(centre, dest).distance;
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

  public distanceOk( Adre :string){
    let Max = this.DistanceCriteria;
    const centre = {lat: this.LatitudeCriteria, lon: this.LongitudeCriteria};
    const dest = this.getDest(Adre);
    let res1 =  (this.getDistance(Adre, Max) <= Max);
    let res2 =  insideCircle(dest,centre,Max);
    console.log("ok1:",res1,"ok2:", res2);
    return res2;
  }
}
