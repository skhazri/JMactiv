import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  get(facebookid) {
    return this.http.get(environment.ACTIVITY_API + '/api/getUser/' + facebookid)
      .pipe(res => res)
      .toPromise()
      .catch(err => {
        console.log(err);
      })
  }
  post(data) {
    console.log("user.servicepost:");
    console.log(data)
    return this.http.post(environment.ACTIVITY_API + '/api/postUser', data);
  }
}
