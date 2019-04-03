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

}
