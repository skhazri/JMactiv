import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JmactiveactivitesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';

  get(userid){
    return this.http.get(this.baseUrl + '/api/getMaListeActivite/' + userid)
  }

  getActivity(activityid){
    return this.http.get(this.baseUrl + '/api/getMonActivite/' + activityid)
  }

  post(data){
    return this.http.post(this.baseUrl + '/api/SaveActivity', data)
  }

  postUpdate(data){
    console.log(data);
    return this.http.post(this.baseUrl + '/api/UpdateActivity', data)
  }

  postDelete(activityid){
    console.log("postDelete" + activityid);
    return this.http.post(this.baseUrl + '/api/DeleteActivity', activityid)
  }

}