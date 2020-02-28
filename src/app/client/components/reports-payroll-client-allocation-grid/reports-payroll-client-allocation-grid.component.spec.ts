import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollClientAllocationGridComponent } from './reports-payroll-client-allocation-grid.component';

describe('ReportsPayrollClientAllocationGridComponent', () => {
  let component: ReportsPayrollClientAllocationGridComponent;
  let fixture: ComponentFixture<ReportsPayrollClientAllocationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollClientAllocationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollClientAllocationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
