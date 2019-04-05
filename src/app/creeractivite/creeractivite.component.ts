import { Component, OnInit, ViewChild, EventEmitter, Output, Inject } from '@angular/core';
import { MatRippleModule, MatDialogModule, MatDatepickerModule, NativeDateModule, MatButtonModule, MatFormFieldModule, MatInputModule, ErrorStateMatcher, MatDatepickerInputEvent, MatDialog } from '@angular/material';
import { MatTimeSelectModule, MatNativeTimeModule } from 'ngx-material-time-select';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActiviteService } from '../services/activite.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return form.hasError('StartDateReq') || form.hasError('EndDateReq') || form.hasError('notValidDate') || form.hasError('notValidTime');
  }
}

@Component({
  selector: 'app-creeractivite',
  templateUrl: './creeractivite.component.html',
  styleUrls: ['./creeractivite.component.scss']
})
export class CreeractiviteComponent implements OnInit {

  @Output() dateChange: EventEmitter<MatDatepickerInputEvent<any>>;
  form: FormGroup;
  controls: any;
  today = new Date();
  startTimeMin: any;
  endTimeMin: any;
  isVisible: Boolean = false;
  submitted = false;
  errorMatcher = new CrossFieldErrorMatcher();
  options = {
    types: [],
    componentRestrictions: { country: 'CA' }
  };
  event: any;
  id: any;
  title: string;
  update: boolean = false;
  name: any;
  description: any;
  startDate: any;
  startTime: any;
  endDate: any;
  endTime: any;
  location: any;
  type: any;
  online: any;
  endDateTime: any;
  userId: any;
  isGallery : boolean = true;
  images : Array<any> [9];
  isImage: boolean = false;
  image: any;

  constructor(
    private formBuilder: FormBuilder,
    private activiteService: ActiviteService,
    private dialogRef: MatDialogRef<CreeractiviteComponent>,
    @Inject(MAT_DIALOG_DATA) { title, update, event, isVisible, userId }) {

    this.title = title;
    this.name = event.name;
    this.location = event.location;
    this.description = event.description;
    this.startDate = event.startDate;
    this.startTime = event.startTime;
    this.endDate = event.endDate;
    this.endTime = event.endTime;
    this.update = update;
    this.id = event.id;
    this.type = event.type;
    this.online = event.online;
    this.endDateTime = event.endDateTime;
    this.isVisible = event.endDateTime;
    this.userId = event.userId
    this.image = event.image;
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.minLength(3)]],
      location: [this.location],
      description: [this.description],
      endDateTime: [this.endDateTime],
      type: [this.type, [Validators.required]],
      startDate: [this.startDate],
      startTime: [this.startTime],
      endDate: [this.endDate],
      endTime: [this.endTime],
      online: [this.online],
      image: [this.image]
    },
      {
        validators: [
          this.checkStartTime,
          this.checkDates,
          this.checkEndTime,
          // this.checkTimes
        ]
      }
    );
  this.getImages();

  }
  get f() {
    return this.form.controls;
  }

  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  public handleAddressChange(address: any) {
    console.log(address);
    this.location = address.formatted_address;
  }
  getImages() {
    return this.activiteService.getImages().then(
      (res) => {
        this.images = res.json().hits;
      });
  }

  checkDates(form: FormGroup) {
    const condition = form.get('startDate').value != null && form.get('endDate').value != null;
    if (condition) {
      const result = form.get('startDate').value > form.get('endDate').value;
      return result ? { notValidDate: true } : null;
    }
  }
  checkTimes(form: FormGroup) {
    if (form.get('startDate').value != null && form.get('endDate').value != null) {
      const conditionEga = (form.get('startDate').value - form.get('endDate').value) == 0;
      const condition = conditionEga && form.get('startTime').value != null && form.get('endTime').value != null;

      if (condition) {
        let diff = form.get('endTime').value - form.get('startTime').value;
        console.log("diff", diff);
        if ((diff < 0 && diff >= 6000 && diff < 1800000))
          // diff < 1800000
          return condition ? { notValidTime: true } : null;
      }
    }
    return null;
  }
  checkStartTime(form: FormGroup) {
    const condition = form.get('startDate').value == null && form.get('startTime').value != null;
    if (condition) {
      form.controls.startDate.markAsTouched();
      form.get('startDate').markAsTouched();
      return condition ? { StartDateReq: true } : null;
    }
  }
  checkEndTime(form: FormGroup) {
    const condition = (form.get('endDate').value == null) && (form.get('endTime').value != null);
    if (condition) {
      form.get('endDate').markAsTouched();
      return condition ? { EndDateReq: true } : null;
    }
  }
  onStartDateChange(event) {
    if (this.f.startDate.value.getDate() == this.today.getDate() && this.f.startDate.value.getMonth() === this.today.getMonth()) {
      this.startTimeMin = new Date();
    }
    else {
      this.startTimeMin = "";
    }
  }
  onEndDateChange(event) {
    if (this.f.endDate.value.getDate() == this.today.getDate() && this.f.endDate.value.getMonth() == this.today.getMonth()) {
      this.endTimeMin = new Date();
    }
    else {
      this.endTimeMin = "";
    }
  }

  onChange() {
    this.isVisible = this.f.endDateTime.value;
    // if (!this.isVisible) {
    //   this.form.patchValue({
    //     endDate: this.f.endDate.value,
    //     endTime: this.f.endTime.value
    //   });
    // }
  }
  getErrorName() {
    return this.f.name.hasError('required') ? 'Event Name is required' :
      this.f.name.hasError('minlength') ? 'Minimum length is 3 characters' : '';
  }
  getErrorDates() {
    return this.form.hasError('notValidDate') ? 'Choose an ulterior Date' :
      this.f.endDate.hasError('required') ? 'Field is required' : '';
  }
  getErrorEndDate() {
    return this.f.endDate.hasError('required') ? 'Field is required ' : '';
  }
  getErrorStartDate() {
    return this.form.hasError('StartDateReq') ? 'StartDateReq is required ' : '';
  }

  save() {
    this.form.patchValue({
      location: this.location
    });
    switch (this.form.value.endDateTime) {
      case true:
        this.form.value.endDateTime = "true";
        break;
      case false:
        this.form.value.endDateTime = "false";
    }

    if (this.form.invalid) {
      return;
    }
    if (!this.update) {
      if (this.form.invalid) {
        return;
      }
      switch (this.form.value.endDateTime) {
        case true:
          this.form.value.endDateTime = "true";
          break;
        case false:
          this.form.value.endDateTime = "false";
      }
      let event = { id: this.userId, attributes: this.form.value }
      this.activiteService.post(event)
        .subscribe(res => {
          this.dialogRef.close();
          this.form.setValue({
            name: null,
            location: null,
            description: null,
            type: 'private',
            startDate: null,
            startTime: null,
            endDateTime: false,
            endDate: null,
            endTime: null,
            online: 'false',
            image: null
          });

          for (let i in this.form.controls) { this.form.controls[i].setErrors(null);}
        }, error => {
          console.log(error);
        });

    }
    else {
      let data = { id: this.id, attributes: this.form.value }
      this.activiteService.postUpdate(data).subscribe(res => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
      });
    }
  }

  close() {
    this.dialogRef.close();
  }
  /**
   * choosePhoto
   */
  choosePhoto() {
    console.log('selected');
    this.isGallery = false;
    this.isImage = true;
  }
 
  /**
   * removePhoto
   */
  removePhoto() {
    this.isImage = false;
    this.form.patchValue({
      image: this.image
    });
    
  }
  /**
   * backEvent
   */
  backEvent() {
    this.isGallery = true;
    if(this.form.value.image == null) {
      this.isImage = false;
    }
  }
  onImageChange(image) {
    this.isGallery = true;
    this.isImage = true;
    if(image == null) {
      this.isImage = false;
    }
 }
}
