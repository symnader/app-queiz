import { TestBed } from '@angular/core/testing';

import { FormMasterDetailService } from './form-master-detail.service';

describe('FormMasterDetailService', () => {
  let service: FormMasterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMasterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
