import { TestBed } from '@angular/core/testing';

import { FormReportService } from './form-report.service';

describe('FormReportService', () => {
  let service: FormReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
