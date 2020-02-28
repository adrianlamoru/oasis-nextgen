import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupEventsService } from './client-setup-events.service';

describe('ClientSetupEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupEventsService]
    });
  });

  it('should be created', inject([ClientSetupEventsService], (service: ClientSetupEventsService) => {
    expect(service).toBeTruthy();
  }));
});
