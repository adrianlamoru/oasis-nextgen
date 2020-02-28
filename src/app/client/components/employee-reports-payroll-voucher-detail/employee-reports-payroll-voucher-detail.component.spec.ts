import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollVoucherDetailComponent } from './employee-reports-payroll-voucher-detail.component';

describe('EmployeeReportsPayrollVoucherDetailComponent', () => {
  let component: EmployeeReportsPayrollVoucherDetailComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollVoucherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollVoucherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollVoucherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
