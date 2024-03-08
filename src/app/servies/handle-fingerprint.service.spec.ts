import { TestBed } from '@angular/core/testing';

import { HandleFingerprintService } from './handle-fingerprint.service';

describe('HandleFingerprintService', () => {
  let service: HandleFingerprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleFingerprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
