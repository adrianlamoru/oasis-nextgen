import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollVoucherSummaryComponent } from './employee-reports-payroll-voucher-summary.component';

describe('EmployeeReportsPayrollVoucherSummaryComponent', () => {
  let component: EmployeeReportsPayrollVoucherSummaryComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollVoucherSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollVoucherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollVoucherSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
