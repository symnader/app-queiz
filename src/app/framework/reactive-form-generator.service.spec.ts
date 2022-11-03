import { TestBed } from '@angular/core/testing';

import { ReactiveFormGeneratorService } from './reactive-form-generator.service';

describe('ReactiveFormGeneratorService', () => {
  let service: ReactiveFormGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
