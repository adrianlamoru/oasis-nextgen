import { TestBed, inject } from '@angular/core/testing';

import { ClientEmployeeProjectDetailsService } from './client-employee-project-details.service';

describe('ClientEmployeeProjectDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientEmployeeProjectDetailsService]
    });
  });

  it('should be created', inject([ClientEmployeeProjectDetailsService], (service: ClientEmployeeProjectDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
