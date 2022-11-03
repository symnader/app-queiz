import { TestBed } from '@angular/core/testing';

import { FormSimpleService } from './form-simple.service';

describe('FormSimpleService', () => {
  let service: FormSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
