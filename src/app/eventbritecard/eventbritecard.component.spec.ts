import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbritecardComponent } from './eventbritecard.component';

describe('EventbritecardComponent', () => {
  let component: EventbritecardComponent;
  let fixture: ComponentFixture<EventbritecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbritecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbritecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
