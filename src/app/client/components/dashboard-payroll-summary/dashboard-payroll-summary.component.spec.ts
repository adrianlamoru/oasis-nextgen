import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPayrollSummaryComponent } from './dashboard-payroll-summary.component';

describe('DashboardPayrollSummaryComponent', () => {
  let component: DashboardPayrollSummaryComponent;
  let fixture: ComponentFixture<DashboardPayrollSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPayrollSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPayrollSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
