import { TestBed } from '@angular/core/testing';

import { SupplierData } from './supplier-data';

describe('SupplierData', () => {
  let service: SupplierData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
