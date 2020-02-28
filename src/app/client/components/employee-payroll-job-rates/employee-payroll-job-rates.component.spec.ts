import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollJobRatesComponent } from './employee-payroll-job-rates.component';

describe('EmployeePayrollJobRatesComponent', () => {
  let component: EmployeePayrollJobRatesComponent;
  let fixture: ComponentFixture<EmployeePayrollJobRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayrollJobRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollJobRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
