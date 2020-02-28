import { TestBed, inject } from '@angular/core/testing';

import { ClientEmployeeBarchartDetailsService } from './client-employee-barchart-details.service';

describe('ClientEmployeeBarchartDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientEmployeeBarchartDetailsService]
    });
  });

  it('should be created', inject([ClientEmployeeBarchartDetailsService], (service: ClientEmployeeBarchartDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
