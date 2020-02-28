import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupDepartmentsService } from './client-setup-departments.service';

describe('ClientSetupDepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupDepartmentsService]
    });
  });

  it('should be created', inject([ClientSetupDepartmentsService], (service: ClientSetupDepartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
