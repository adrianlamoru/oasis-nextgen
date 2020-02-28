import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollBenefitsBillingComponent } from './reports-payroll-benefits-billing.component';

describe('ReportsPayrollBenefitsBillingComponent', () => {
  let component: ReportsPayrollBenefitsBillingComponent;
  let fixture: ComponentFixture<ReportsPayrollBenefitsBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollBenefitsBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollBenefitsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
