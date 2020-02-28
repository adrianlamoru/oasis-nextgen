import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsBenefits401kSummaryComponent } from './employee-reports-benefits-401k-summary.component';

describe('EmployeeReportsBenefits401kSummaryComponent', () => {
  let component: EmployeeReportsBenefits401kSummaryComponent;
  let fixture: ComponentFixture<EmployeeReportsBenefits401kSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsBenefits401kSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsBenefits401kSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
