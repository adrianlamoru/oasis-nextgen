import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEmployeePayrollPayStubsComponent } from './reports-employee-payroll-pay-stubs.component';

describe('ReportsEmployeePayrollPayStubsComponent', () => {
  let component: ReportsEmployeePayrollPayStubsComponent;
  let fixture: ComponentFixture<ReportsEmployeePayrollPayStubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEmployeePayrollPayStubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEmployeePayrollPayStubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
