import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JmactiveactivitesService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000';

  get(){
    console.log("get jmactivuserservice");
    return this.http.get(this.baseUrl + '/api/getMaListeActivite')
  }
  post(data){
    return this.http.post(this.baseUrl + '/api/', data)
  }
}