import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { JmactiveactivitesService } from "../jmactiveactivites.service";
import { oracledb } from "oracledb";
//declare var $;

@Component({
  selector: 'app-malisteactivite',
  templateUrl: './malisteactivite.component.html',
  styleUrls: ['./malisteactivite.component.scss']
})
export class MalisteactiviteComponent implements OnInit {

  activites: any;
  activite: Activities  = new Activities();

  //@ViewChild('dataTable') table: ElementRef;
  //dataTable: any;
  //dtOption: any;
  //tableActivite: any = oracledb.activite;

  constructor(private activiteService: JmactiveactivitesService) { }


  ngOnInit() {
    this.getActivites();
    //on a besoin d'un chemin pour prendre injecter les données dans la table
/*    this.dtOption = {
        "paging":   true,
        "ordering": true,
        "info":     true
    };



    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable(this.dtOption);
*/

    //this.activiteService.get();
  }

  //il fait quoi lui? Il va chercher les données de la table ACTIVITIES
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
