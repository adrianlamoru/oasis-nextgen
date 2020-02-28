import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunHoursEarningsComponent } from './payroll-run-hours-earnings.component';

describe('PayrollRunHoursEarningsComponent', () => {
  let component: PayrollRunHoursEarningsComponent;
  let fixture: ComponentFixture<PayrollRunHoursEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunHoursEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunHoursEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
