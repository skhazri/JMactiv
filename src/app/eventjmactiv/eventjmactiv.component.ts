import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {AuthService} from "angular-6-social-login";
import {ActiviteService} from "../services/activite.service";

@Component({
  selector: 'app-eventjmactiv',
  templateUrl: './eventjmactiv.component.html',
  styleUrls: ['./eventjmactiv.component.scss']
})
export class EventjmactivComponent implements OnInit, OnChanges {


  @Input() eventCriteria: string;


  events: [];
  searchText;

  constructor(private activiteService: ActiviteService) {
  }

  ngOnInit() {
    console.log(this.eventCriteria);
    this.getActivites();
  }

  ngOnChanges() {
    // create header using child_id
    console.log(this.eventCriteria);
  }

  public getActivites() {
    this.activiteService.getActivities()
        .subscribe((data) => {
          this.events = (data.json());
        });
  }

}
