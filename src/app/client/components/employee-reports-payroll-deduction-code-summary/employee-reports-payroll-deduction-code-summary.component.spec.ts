import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollDeductionCodeSummaryComponent } from './employee-reports-payroll-deduction-code-summary.component';

describe('EmployeeReportsPayrollDeductionCodeSummaryComponent', () => {
  let component: EmployeeReportsPayrollDeductionCodeSummaryComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollDeductionCodeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollDeductionCodeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollDeductionCodeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
