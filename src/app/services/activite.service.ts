import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  constructor(private http: Http) { }

 
 get(userid){
  return this.http.get(environment.ACTIVITY_API + '/api/getMaListeActivite/' + userid)
}

getActivity(activityid){
  return this.http.get(environment.ACTIVITY_API + '/api/getMonActivite/' + activityid)
}
getActivities(){
  return this.http.get(environment.ACTIVITY_API + '/api/getActivites' )
}

searchActivities(startdatetime, enddatetime, latitude, longitude, distance){
    console.log("searchstarttime " + startdatetime);
    //let params = new HttpParams().set('startTime',startdatetime);//.set("sdt",startdatetime).set("enddatetime", enddatetime).set("latitude", latitude).set("longitude",  longitude).set("distance", distance); //Create new HttpParams
    //console.log(params.toString());
    return this.http.get(environment.ACTIVITY_API + '/api/searchActivites/' + startdatetime + '/' + enddatetime);
}

post(data){
  return this.http.post(environment.ACTIVITY_API+ '/api/SaveActivity', data)
}

postUpdate(data){
  return this.http.post(environment.ACTIVITY_API + '/api/UpdateActivity', data)
}

postDelete(activityid){
  return this.http.post(environment.ACTIVITY_API + '/api/DeleteActivity', activityid)
}

getImages() {
    return this.http.get(environment.PHOTO_API+'/collections/4592632/photos?client_id=c4aef0d3752bf00f465ad1b4c5f5ceafb7b10ce919788d2bee18d50926b87346&page=1&rel=next&per_page=40&fit=crop&w=300&h=100')
    .toPromise();
}

geocode(lat,lng) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=AIzaSyCkCFTN_v4H8T3BjrU-76w_w1MFSLWfjqw`;
  return this.http.get(url);
}
}
