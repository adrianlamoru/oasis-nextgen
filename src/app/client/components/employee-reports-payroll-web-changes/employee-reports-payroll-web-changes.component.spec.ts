import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPayrollWebChangesComponent } from './employee-reports-payroll-web-changes.component';

describe('EmployeeReportsPayrollWebChangesComponent', () => {
  let component: EmployeeReportsPayrollWebChangesComponent;
  let fixture: ComponentFixture<EmployeeReportsPayrollWebChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPayrollWebChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPayrollWebChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
