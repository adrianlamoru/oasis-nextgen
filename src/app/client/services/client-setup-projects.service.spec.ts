import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupProjectsService } from './client-setup-projects.service';

describe('ClientSetupProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupProjectsService]
    });
  });

  it('should be created', inject([ClientSetupProjectsService], (service: ClientSetupProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
