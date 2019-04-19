import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {Http, Response} from  '@angular/http'
import * as moment from 'moment';

@Component({
    selector: 'app-eventbritecard',
    templateUrl: './eventbritecard.component.html',
    styleUrls: ['./eventbritecard.component.scss']
})
export class EventbritecardComponent implements OnInit, OnChanges {

    @Input() eventCriteria: string;
    @Input() LongitudeCriteria: number;
    @Input() LatitudeCriteria: number;
    @Input() DistanceCriteria: number;
    @Input() StartDateCriteria: string;
    @Input() StartTimeCriteria: string;
    @Input() EndDateCriteria: string;
    @Input() EndTimeCriteria: string;

    activites: Activities[] = [];
    activite: Activities  = new Activities();


    constructor(private http: Http) { }

    ngOnInit() {

//        this.searchEvents();
    }

    ngOnChanges() {
        this.searchEvents();
    }

    private searchEvents(){

        let startdatetime = moment(this.StartDateCriteria).format("YYYY-MM-DD") + 'T' + moment(this.StartTimeCriteria).format("HH:mm:ss");
        let enddatetime;
        let endDateTimeParam="";
        if (!(this.EndDateCriteria === undefined)) {
            enddatetime = moment(this.EndDateCriteria).format("YYYY-MM-DD") + 'T' + moment(this.EndTimeCriteria).format("HH:mm:ss");
            endDateTimeParam= "&start_date.range_end=" + enddatetime ;

        }
        'Tuesday, August 2nd, 2016, 5:45:19 PM'
        let theUrl = 'https://www.eventbriteapi.com/v3/events/search/?q=' + this.eventCriteria + '&sort_by=date&location.address=100&location.within=' + this.DistanceCriteria + 'km&location.latitude=' + this.LatitudeCriteria + '&location.longitude=' + this.LongitudeCriteria + '&categories=108&start_date.range_start=' + startdatetime + endDateTimeParam + '&search_type=public&token=QOFJL3X3PX6VGOTEA24J';
        console.log(theUrl);
        this.http.get(theUrl)
            .pipe(map(this.extractData))
            .subscribe(activities => {

                let a = [];

                activities.events.forEach(function(element) {
                    let ac = new Activities();
                    ac.ACTIVITYTYPE = element.name.html;
                    ac.STARTTIME = element.start.local;
                    ac.ENDTIME = element.end.local;
                    ac.DESCRIPTION = element.description;
                    ac.LOGO = element.logo === null ? '' : element.logo.url;
                    ac.URLEVENT = element.url === null ? '' : element.url;
                    ac.VENUE_ID = element.venue_id;
                    ac.ID = element.id;
                    a.push(ac);
                });

                this.activites = a;
                console.log(this.activites)
                this.searchEventsVenue();

            });
    }

    private searchEventsVenue(){
        let that = this;
        that.activites.forEach(function(element) {
            let venue_adress = 'https://www.eventbriteapi.com/v3/venues/' + element.VENUE_ID  + '/?token=QOFJL3X3PX6VGOTEA24J';

            that.http.get(venue_adress)
                .pipe(map(that.extractData))
                .subscribe(venue => {
                    element.ACTIVITYLOCATION = venue.address.city + ', ' + venue.address.postal_code;
                });
        });
    }

    private extractData(res: Response) {
        const body = res.json();
        //console.log(body);
        return body || {};
    }

}


class Activities {
    ACTIVITYTYPE: string;
    STARTTIME: string;
    ENDTIME: string;
    ACTIVITYLOCATION: string;
    LOGO: string;
    URLEVENT: string;
    VENUE_ID: string;
    DESCRIPTION: string;
    ID: string;
}
