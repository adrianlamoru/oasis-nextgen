import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollInquiryComponent } from './employee-reports-payroll-inquiry.component';

describe('EmployeeReportsPayrollInquiryComponent', () => {
  let component: EmployeeReportsPayrollInquiryComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
