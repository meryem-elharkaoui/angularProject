import { TestBed } from '@angular/core/testing';

import { AnnuiteService } from './annuite.service';

describe('AnnuiteService', () => {
  let service: AnnuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
