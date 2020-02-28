/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnnualPaySummaryService } from './annual-pay-summary.service';

describe('Service: AnnualPaySummary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnualPaySummaryService]
    });
  });

  it('should ...', inject([AnnualPaySummaryService], (service: AnnualPaySummaryService) => {
    expect(service).toBeTruthy();
  }));
});
