import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";


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
    let url = `${environment.Facebook_API}/${id}/events?fields=cover%2Cend_time%2Cid%2Cname%2Cplace%2Ctype%2Cstart_time%2Cdescription&access_token=${token}`;
    return this.http.get(url);
  }
  /**
   * get single User Event from FB API 
   * @param id 
   * @param token 
   */
    public getEvent(id: number, token) {
    let url = `${environment.Facebook_API}/${id}?fields=cover%2Cend_time%2Cid%2Cname%2Cplace%2Ctype%2Cstart_time%2Cdescription&access_token=${token}`;
    return this.http.get(url);
  }
  
  searchEntries(term:String,id: any, token: any) {
    let url = `${environment.Facebook_API}/${id}/events?access_token=${token}`;
    return this.http
        .get(url + this.queryUrl + term);  }

}
