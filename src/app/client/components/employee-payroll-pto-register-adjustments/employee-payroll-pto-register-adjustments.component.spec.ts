/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmployeePayrollPtoRegisterAdjustmentsComponent } from './employee-payroll-pto-register-adjustments.component';

describe('EmployeePayrollPtoRegisterAdjustmentsComponent', () => {
  let component: EmployeePayrollPtoRegisterAdjustmentsComponent;
  let fixture: ComponentFixture<EmployeePayrollPtoRegisterAdjustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayrollPtoRegisterAdjustmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollPtoRegisterAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
