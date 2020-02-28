import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupJobcodeService } from './client-setup-jobcode.service';

describe('ClientSetupJobcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupJobcodeService]
    });
  });

  it('should be created', inject([ClientSetupJobcodeService], (service: ClientSetupJobcodeService) => {
    expect(service).toBeTruthy();
  }));
});
