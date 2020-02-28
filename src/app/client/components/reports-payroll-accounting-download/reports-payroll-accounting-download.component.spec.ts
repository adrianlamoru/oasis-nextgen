import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollAccountingDownloadComponent } from './reports-payroll-accounting-download.component';

describe('ReportsPayrollAccountingDownloadComponent', () => {
  let component: ReportsPayrollAccountingDownloadComponent;
  let fixture: ComponentFixture<ReportsPayrollAccountingDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollAccountingDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollAccountingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
