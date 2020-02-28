import { TestBed, inject } from '@angular/core/testing';

import { ClientSetupGeneralLedgerService } from './client-setup-general-ledger.service';

describe('ClientSetupGeneralLedgerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientSetupGeneralLedgerService]
    });
  });

  it('should be created', inject([ClientSetupGeneralLedgerService], (service: ClientSetupGeneralLedgerService) => {
    expect(service).toBeTruthy();
  }));
});
