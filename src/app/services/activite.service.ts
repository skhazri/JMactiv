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
  return this.http.get('https://pixabay.com/api/?key=12098401-a292f25354960a9d8b0f06319&q=sport&image_type=photo&per_page=40&min_height="400"')
  .toPromise();
}
}
