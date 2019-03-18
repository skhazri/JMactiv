import { TestBed } from '@angular/core/testing';

import { JmactivuserService } from './jmactivuser.service';
import {beforeEach, describe, expect, it} from "@angular/core/testing/src/testing_internal";

describe('JmactivuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JmactivuserService = TestBed.get(JmactivuserService);
    expect(service).toBeTruthy();
  });
});
