import { TestBed, inject } from '@angular/core/testing';

import { GarnishmentsDocketReportService } from './garnishments-docket-report.service';

describe('GarnishmentsDocketReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarnishmentsDocketReportService]
    });
  });

  it('should be created', inject([GarnishmentsDocketReportService], (service: GarnishmentsDocketReportService) => {
    expect(service).toBeTruthy();
  }));
});
