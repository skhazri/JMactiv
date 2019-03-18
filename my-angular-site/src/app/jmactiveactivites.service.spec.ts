import { TestBed } from '@angular/core/testing';

import { JmactiveactivitesService } from './jmactiveactivites.service';
import {beforeEach, describe, expect, it} from "@angular/core/testing/src/testing_internal";

describe('JmactiveactivitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JmactiveactivitesService = TestBed.get(JmactiveactivitesService);
    expect(service).toBeTruthy();
  });
});
