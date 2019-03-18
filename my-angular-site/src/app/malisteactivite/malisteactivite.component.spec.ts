import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalisteactiviteComponent } from './malisteactivite.component';
import {beforeEach, describe, expect, it} from "@angular/core/testing/src/testing_internal";

describe('MalisteactiviteComponent', () => {
  let component: MalisteactiviteComponent;
  let fixture: ComponentFixture<MalisteactiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalisteactiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalisteactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
