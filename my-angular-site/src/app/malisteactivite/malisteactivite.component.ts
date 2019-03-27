import {Component, OnDestroy, ElementRef, OnInit, ViewChild, TemplateRef, AfterViewInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { JmactiveactivitesService } from "../jmactiveactivites.service";
import {HttpClient} from "@angular/common/http";
import {Http, Response} from  '@angular/http'
import { oracledb } from "oracledb";
import { map } from "rxjs/operators";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";

declare var $;

@Component({
  selector: 'app-malisteactivite',
  templateUrl: './malisteactivite.component.html',
  styleUrls: ['./malisteactivite.component.scss']/*,
    providers: [
        // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
        // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
        {provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS},
    ],*/
})
export class MalisteactiviteComponent implements OnDestroy, OnInit {

    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;

    editActivity: Activities  = new Activities();
    activite: Activities  = new Activities();
    errorMsg: ErrorMsg  = new ErrorMsg();
    modalRef: BsModalRef;
    id = {'id': ''};

    dtOptions: DataTables.Settings = {};
    activites: Activities[] = [];
    dtTrigger: Subject<any> = new Subject();

   // public dateTime = new moment();

    constructor(private activiteService: JmactiveactivitesService,
              private modalService: BsModalService,
              private http: Http) { }


  ngOnInit() {
      this.activite.USERID = 2;
    //this.getActivites();
    this.dtOptions = {
        info:     true,
        paging:   true,
        pagingType:   'full_numbers',
        pageLength: 10
    };

      this.http.get('http://localhost:3000/api/getMaListeActivite/2')
          .pipe(map(this.extractData))
          .subscribe(activities => {
              this.activites = activities;
              console.log('activites');
              this.dtTrigger.next();
          });

  }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    private extractData(res: Response) {
        const body = res.json();
        console.log(body);
        return body.data || {};
    }
    openModalAdd(template: TemplateRef<any>) {
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activityduration=this.errorMsg.activitylocation="";
        this.modalRef = this.modalService.show(template);

    }

    openModalUpdate(template: TemplateRef<any>, activite) {

        this.modalRef = this.modalService.show(template);
        this.editActivity = activite;
        console.log('openModalUpdate' + this.editActivity.ACTIVITYID);
        //this.getActiviteId();
    }

    openModalDelete(template: TemplateRef<any>, activiteid) {
        this.activite.ACTIVITYID = activiteid.ACTIVITYID;
        console.log('openModalDelete ' + this.id.id);
        this.modalRef = this.modalService.show(template);
    }

    deleteActivity(){
        console.log('deleteActivity' + this.activite.ACTIVITYID);
        this.activiteService.postDelete(this.activite).subscribe(res => {
            //this.getActivites();
            this.modalRef.hide();
            console.log(res);
            this.rerender();
        }, error => {
            console.log(error);
        });
    }

    onSave(){
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activitylocation="";
        this.errorMsg.activityduration="";

        !this.activite.ACTIVITYTYPE ? this.errorMsg.activitytype = 'Type d\'activité requis' : '';
        !this.activite.STARTTIME ? this.errorMsg.starttime = 'Date activité requise' : '';
        Number(this.activite.ACTIVITYDURATION) == NaN ? this.errorMsg.activityduration = 'La durée de l\'activité requise ' + Number(this.activite.ACTIVITYDURATION)  : '';
        !this.activite.ACTIVITYLOCATION ? this.errorMsg.activitylocation = 'L\'endroit de l\'activité requis' : '';

        if(!this.activite.ACTIVITYTYPE || !this.activite.STARTTIME || !this.activite.ACTIVITYLOCATION || Number(this.activite.ACTIVITYDURATION) == NaN){
            return;
        }
        console.log(this.activite.STARTTIME);
        this.activiteService.post(this.activite).subscribe(res => {
           // this.getActivites();
            paging: false;
            this.modalRef.hide();
            console.log(res);
            this.rerender();
        }, error => {
            console.log(error);
        });
    }
    onUpdate(){
        console.log('onUpdate');
        this.errorMsg.activitytype=this.errorMsg.starttime=this.errorMsg.activitylocation="";
        this.errorMsg.activityduration="";

        !this.editActivity.ACTIVITYTYPE ? this.errorMsg.activitytype = 'Type d\'activité requis' : '';
        !this.editActivity.STARTTIME ? this.errorMsg.starttime = 'Date activité requise' : '';
        Number(this.editActivity.ACTIVITYDURATION) == NaN ? this.errorMsg.activityduration = 'La durée de l\'activité requise ' + Number(this.activite.ACTIVITYDURATION)  : '';
        !this.editActivity.ACTIVITYLOCATION ? this.errorMsg.activitylocation = 'L\'endroit de l\'activité requis' : '';

        if(!this.editActivity.ACTIVITYTYPE || !this.editActivity.STARTTIME || !this.editActivity.ACTIVITYDURATION || Number(this.editActivity.ACTIVITYLOCATION) == NaN){
            return;
        }

        this.activiteService.postUpdate(this.editActivity).subscribe(res => {
            this.modalRef.hide();
            console.log("postUpdate");
        }, error => {
            console.log(error);
        });



    }


    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            this.http.get('http://localhost:3000/api/getMaListeActivite/2')
                .pipe(map(this.extractData))
                .subscribe(activities => {
                    this.activites = activities;
                    console.log('activites');
                    this.dtTrigger.next();
                });

        });
    }
    /*
        getActivites(){
            this.activiteService.get(this.activite.USERID ).subscribe(res => {
                this.activites = res;
                console.log(this.activites);
                console.log("getActivites accueil")

            },error => {
                console.log(error);
            });
        }
    */

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
    ACTIVITYTYPE: string;
    STARTTIME: string;
    ACTIVITYDURATION: number;
    ACTIVITYLOCATION: string;
    USERID: number;
    ACTIVITYID: number
}

class ErrorMsg{
    activitytype: string;
    starttime: string;
    activityduration: string;
    activitylocation: string;
}