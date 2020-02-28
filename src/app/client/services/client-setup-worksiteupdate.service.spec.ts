import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupWorksiteupdateService } from './client-setup-worksiteupdate.service';

describe('ClientSetupWorksiteupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupWorksiteupdateService]
    });
  });

  it('should be created', inject([ClientSetupWorksiteupdateService], (service: ClientSetupWorksiteupdateService) => {
    expect(service).toBeTruthy();
  }));
});
