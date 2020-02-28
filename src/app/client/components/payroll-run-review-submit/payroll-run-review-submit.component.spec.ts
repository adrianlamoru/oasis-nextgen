import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunReviewSubmitComponent } from './payroll-run-review-submit.component';

describe('PayrollRunReviewSubmitComponent', () => {
  let component: PayrollRunReviewSubmitComponent;
  let fixture: ComponentFixture<PayrollRunReviewSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunReviewSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunReviewSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
