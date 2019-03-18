import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

@Injectable()
export class FacebookService {
  queryUrl: string = '?search=';
  term:String;
  constructor(private http: Http) { }

  /**
   * get User Events from FB API 
   * @param id 
   * @param token 
   */
  getEvents(id: any, token: any) {
    let url = `${environment.Facebook_API}/${id}/events?access_token=${token}`;
    return this.http.get(url);
  }
  /**
   * get single User Event from FB API 
   * @param id 
   * @param token 
   */
    public getEvent(id: number, token) {
    let url = `${environment.Facebook_API}/${id}?access_token=${token}`;
    return this.http.get(url);
  }
  
  searchEntries(term:String,id: any, token: any) {
    let url = `${environment.Facebook_API}/${id}/events?access_token=${token}`;
    return this.http
        .get(url + this.queryUrl + term);  }

}
