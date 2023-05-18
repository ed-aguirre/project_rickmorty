import { TestBed } from '@angular/core/testing';

import { RMApiService } from './rmapi.service';

describe('RMApiService', () => {
  let service: RMApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RMApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
