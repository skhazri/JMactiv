import { Component, OnInit } from '@angular/core';
import { JmactiveactivitesService } from "../jmactiveactivites.service";
import { oracledb } from "oracledb";


@Component({
  selector: 'app-malisteactivite',
  templateUrl: './malisteactivite.component.html',
  styleUrls: ['./malisteactivite.component.scss']
})
export class MalisteactiviteComponent implements OnInit {

  activites: any;
  activite: Activities  = new Activities();

  constructor(private activiteService: JmactiveactivitesService) { }

  ngOnInit() {
    this.getActivites();
    //this.activiteService.get();
  }

  getActivites(){
    this.activiteService.get().subscribe(res => {
      this.activites = res;
      console.log(this.activites);
      console.log("getActivites accueil")

    },error => {
      console.log(error);
    });
  }
}

class Activities {
  activitytype: string;
  starttime: string;
  activityduration: bigint;
  activitylocation: string;
  userid: bigint
}