import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollLoansComponent } from './employee-payroll-loans.component';

describe('EmployeePayrollLoansComponent', () => {
  let component: EmployeePayrollLoansComponent;
  let fixture: ComponentFixture<EmployeePayrollLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePayrollLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
