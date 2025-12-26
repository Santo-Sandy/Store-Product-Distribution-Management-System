import { TestBed } from '@angular/core/testing';

import { ProgressData } from './progress-data';

describe('ProgressData', () => {
  let service: ProgressData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
