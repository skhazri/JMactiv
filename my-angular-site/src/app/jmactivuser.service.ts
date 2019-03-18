import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JmactivuserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';

  get(){
    console.log("get getUser");
    return this.http.get(this.baseUrl + '/api/getUser')
  }
  post(data){
    return this.http.post(this.baseUrl + '/api/', data)
  }
}
