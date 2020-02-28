import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollPtoHoursTakenComponent } from './reports-payroll-pto-hours-taken.component';

describe('ReportsPayrollPtoHoursTakenComponent', () => {
  let component: ReportsPayrollPtoHoursTakenComponent;
  let fixture: ComponentFixture<ReportsPayrollPtoHoursTakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollPtoHoursTakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollPtoHoursTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
