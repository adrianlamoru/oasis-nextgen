import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollPayAndJobOverridesComponent } from './employee-reports-payroll-pay-and-job-overrides.component';

describe('EmployeeReportsPayrollPayAndJobOverridesComponent', () => {
  let component: EmployeeReportsPayrollPayAndJobOverridesComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollPayAndJobOverridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollPayAndJobOverridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollPayAndJobOverridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
