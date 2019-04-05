import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventjmactivComponent } from './eventjmactiv.component';

describe('EventjmactivComponent', () => {
  let component: EventjmactivComponent;
  let fixture: ComponentFixture<EventjmactivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventjmactivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventjmactivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
