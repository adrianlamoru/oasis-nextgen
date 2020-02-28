import { TestBed, inject } from '@angular/core/testing';

import { ClientEmployeeDetailBeniftsService } from './client-employee-detail-benifts.service';

describe('ClientEmployeeDetailBeniftsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientEmployeeDetailBeniftsService]
    });
  });

  it('should be created', inject([ClientEmployeeDetailBeniftsService], (service: ClientEmployeeDetailBeniftsService) => {
    expect(service).toBeTruthy();
  }));
});
