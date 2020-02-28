import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollVoucherSummaryComponent } from './reports-payroll-voucher-summary.component';

describe('ReportsPayrollVoucherSummaryComponent', () => {
  let component: ReportsPayrollVoucherSummaryComponent;
  let fixture: ComponentFixture<ReportsPayrollVoucherSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollVoucherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollVoucherSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
