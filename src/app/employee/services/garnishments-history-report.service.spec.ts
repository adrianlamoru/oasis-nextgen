import { TestBed, inject } from '@angular/core/testing';

import { GarnishmentsHistoryReportService } from './garnishments-history-report.service';

describe('GarnishmentsHistoryReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarnishmentsHistoryReportService]
    });
  });

  it('should be created', inject([GarnishmentsHistoryReportService], (service: GarnishmentsHistoryReportService) => {
    expect(service).toBeTruthy();
  }));
});
