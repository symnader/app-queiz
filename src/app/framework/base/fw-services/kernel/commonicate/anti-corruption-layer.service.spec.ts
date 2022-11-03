import { TestBed } from '@angular/core/testing';

import { AntiCorruptionLayerService } from './anti-corruption-layer.service';

describe('AntiCorruptionLayerService', () => {
  let service: AntiCorruptionLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiCorruptionLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
