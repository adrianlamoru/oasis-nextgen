/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollHoursEarningsAddDeductionComponent } from './payroll-hours-earnings-add-deduction.component';

describe('PayrollHoursEarningsAddDeductionComponent', () => {
  let component: PayrollHoursEarningsAddDeductionComponent;
  let fixture: ComponentFixture<PayrollHoursEarningsAddDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollHoursEarningsAddDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollHoursEarningsAddDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
