/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollRunReviewSubmitPtoOverLimitComponent } from './payroll-run-review-submit-pto-over-limit.component';

describe('PayrollRunReviewSubmitPtoOverLimitComponent', () => {
  let component: PayrollRunReviewSubmitPtoOverLimitComponent;
  let fixture: ComponentFixture<PayrollRunReviewSubmitPtoOverLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunReviewSubmitPtoOverLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunReviewSubmitPtoOverLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
