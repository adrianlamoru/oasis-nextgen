import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollDeductionInArrearsComponent } from './reports-payroll-deduction-in-arrears.component';

describe('ReportsPayrollDeductionInArrearsComponent', () => {
  let component: ReportsPayrollDeductionInArrearsComponent;
  let fixture: ComponentFixture<ReportsPayrollDeductionInArrearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollDeductionInArrearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollDeductionInArrearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
