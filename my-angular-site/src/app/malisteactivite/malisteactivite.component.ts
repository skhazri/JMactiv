import {Component, ElementRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { JmactiveactivitesService } from "../jmactiveactivites.service";
import { oracledb } from "oracledb";
declare var $;

@Component({
  selector: 'app-malisteactivite',
  templateUrl: './malisteactivite.component.html',
  styleUrls: ['./malisteactivite.component.scss']
})
export class MalisteactiviteComponent implements OnInit {

    activites: any;
    editActivity: any;
    activite: Activities  = new Activities();
    errorMsg: ErrorMsg  = new ErrorMsg();
    modalRef: BsModalRef;
    id = {'id': ''};

    @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  dtOption: any;
//  tableActivite: any = oracledb.activite;

  constructor(private activiteService: JmactiveactivitesService,
              private modalService: BsModalService) { }


  ngOnInit() {
      this.activite.userid = 2;
    this.getActivites();
    this.dtOption = {
        "paging":   true,
        "ordering": true,
        "info":     true
    };

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable(this.dtOption);

  }
    openModalAdd(template: TemplateRef<any>) {
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activityduration=this.errorMsg.activitylocation="";
        this.modalRef = this.modalService.show(template);

    }

    openModalUpdate(template: TemplateRef<any>, activite) {

        this.modalRef = this.modalService.show(template);
        this.editActivity = activite;
        console.log('openModalUpdate' + this.editActivity[5]);
        //this.getActiviteId();
    }

    openModalDelete(template: TemplateRef<any>, activiteid) {
        this.activite.activityid = activiteid[5];
        console.log('openModalDelete ' + this.id.id);
        this.modalRef = this.modalService.show(template);
    }

    deleteActivity(){
        console.log('deleteActivity' + this.activite.activityid);
        this.activiteService.postDelete(this.activite).subscribe(res => {
            this.getActivites();
            this.modalRef.hide();
            console.log(res);
        }, error => {
            console.log(error);
        });
    }

    onSave(){
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activitylocation="";
        this.errorMsg.activityduration="";

        !this.activite.activitytype ? this.errorMsg.activitytype = 'Type d\'activité requis' : '';
        !this.activite.starttime ? this.errorMsg.starttime = 'Date activité requise' : '';
        Number(this.activite.activityduration) == NaN ? this.errorMsg.activityduration = 'La durée de l\'activité requise ' + Number(this.activite.activityduration)  : '';
        !this.activite.activitylocation ? this.errorMsg.activitylocation = 'L\'endroit de l\'activité requis' : '';

        if(!this.activite.activitytype || !this.activite.starttime || !this.activite.activitylocation || Number(this.activite.activityduration) == NaN){
            return;
        }
        this.activiteService.post(this.activite).subscribe(res => {
            this.getActivites();
            this.modalRef.hide();
            console.log(res);
        }, error => {
            console.log(error);
        });
    }

    onUpdate(){
        console.log('onUpdate');
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activitylocation="";
        this.errorMsg.activityduration="";

        !this.editActivity[0] ? this.errorMsg.activitytype = 'Type d\'activité requis' : '';
        !this.editActivity[1] ? this.errorMsg.starttime = 'Date activité requise' : '';
        Number(this.editActivity[2]) == NaN ? this.errorMsg.activityduration = 'La durée de l\'activité requise ' + Number(this.activite.activityduration)  : '';
        !this.editActivity[3] ? this.errorMsg.activitylocation = 'L\'endroit de l\'activité requis' : '';

        if(!this.editActivity[0] || !this.editActivity[1] || !this.editActivity[2] || Number(this.editActivity[3]) == NaN){
            return;
        }

        this.activite.activitytype =  this.editActivity[0];
        this.activite.starttime =  this.editActivity[1];
        this.activite.activityduration =  this.editActivity[2];
        this.activite.activitylocation =  this.editActivity[3];
        this.activite.userid =  this.editActivity[4];
        this.activite.activityid =  this.editActivity[5];

        this.activiteService.postUpdate(this.activite).subscribe(res => {
            this.getActivites();
            this.modalRef.hide();
            console.log("postUpdate");
        }, error => {
            console.log(error);
        });



    }

    getActivites(){
        this.activiteService.get(this.activite.userid ).subscribe(res => {
            this.activites = res;
            console.log(this.activites);
            console.log("getActivites accueil")

        },error => {
            console.log(error);
        });
    }


    getActiviteId(){
        console.log('getActiviteId:' + this.editActivity[5]);
        this.activiteService.getActivity(this.editActivity[5]).subscribe(res => {
            //this.editActivity[0] = res[0][0];
            this.editActivity[1] = res[0][1];
            this.editActivity[2]= res[0][2];
            this.editActivity[3]= res[0][3];
            this.editActivity[4]= res[0][4];
            this.editActivity[5]= res[0][5];
            console.log(this.editActivity);
            console.log("getMonActivites accueil")

        },error => {
            console.log(error);
        });
    }
}

class Activities {
    activitytype: string;
    starttime: string;
    activityduration: number;
    activitylocation: string;
    userid: number;
    activityid: number
}

class ErrorMsg{
    activitytype: string;
    starttime: string;
    activityduration: string;
    activitylocation: string;
}