import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollPtoAbsenceSummaryComponent } from './reports-payroll-pto-absence-summary.component';

describe('ReportsPayrollPtoAbsenceSummaryComponent', () => {
  let component: ReportsPayrollPtoAbsenceSummaryComponent;
  let fixture: ComponentFixture<ReportsPayrollPtoAbsenceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollPtoAbsenceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollPtoAbsenceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
