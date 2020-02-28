import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollVoucherDetailComponent } from './reports-payroll-voucher-detail.component';

describe('ReportsPayrollVoucherDetailComponent', () => {
  let component: ReportsPayrollVoucherDetailComponent;
  let fixture: ComponentFixture<ReportsPayrollVoucherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollVoucherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollVoucherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
