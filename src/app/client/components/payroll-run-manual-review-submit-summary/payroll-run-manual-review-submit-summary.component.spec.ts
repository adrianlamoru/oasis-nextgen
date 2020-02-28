import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunManualReviewSubmitSummaryComponent } from './payroll-run-manual-review-submit-summary.component';

describe('PayrollRunManualReviewSubmitSummaryComponent', () => {
  let component: PayrollRunManualReviewSubmitSummaryComponent;
  let fixture: ComponentFixture<PayrollRunManualReviewSubmitSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunManualReviewSubmitSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunManualReviewSubmitSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
