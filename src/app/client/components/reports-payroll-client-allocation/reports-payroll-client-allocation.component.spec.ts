import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollClientAllocationComponent } from './reports-payroll-client-allocation.component';

describe('ReportsPayrollClientAllocationComponent', () => {
  let component: ReportsPayrollClientAllocationComponent;
  let fixture: ComponentFixture<ReportsPayrollClientAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollClientAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollClientAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
