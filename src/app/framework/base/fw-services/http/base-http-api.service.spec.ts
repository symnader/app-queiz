import { TestBed } from '@angular/core/testing';

import { BaseHttpApiService } from './base-http-api.service';

describe('BaseHttpApiService', () => {
  let service: BaseHttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
