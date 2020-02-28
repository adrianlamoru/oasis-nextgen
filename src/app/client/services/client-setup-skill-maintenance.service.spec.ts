import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupSkillMaintenanceService } from './client-setup-skill-maintenance.service';

describe('ClientSetupSkillMaintenanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupSkillMaintenanceService]
    });
  });

  it('should be created', inject([ClientSetupSkillMaintenanceService], (service: ClientSetupSkillMaintenanceService) => {
    expect(service).toBeTruthy();
  }));
});
