import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollAverageHoursComponent } from './employee-reports-payroll-average-hours.component';

describe('EmployeeReportsPayrollAverageHoursComponent', () => {
  let component: EmployeeReportsPayrollAverageHoursComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollAverageHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollAverageHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollAverageHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
