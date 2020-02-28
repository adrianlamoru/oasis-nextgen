import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBenefitsPayrollRegisterDownloadComponent } from './reports-benefits-payroll-register-download.component';

describe('ReportsBenefitsPayrollRegisterDownloadComponent', () => {
  let component: ReportsBenefitsPayrollRegisterDownloadComponent;
  let fixture: ComponentFixture<ReportsBenefitsPayrollRegisterDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBenefitsPayrollRegisterDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBenefitsPayrollRegisterDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
