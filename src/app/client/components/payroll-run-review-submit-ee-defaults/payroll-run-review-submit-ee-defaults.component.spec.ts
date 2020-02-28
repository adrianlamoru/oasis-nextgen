/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollRunReviewSubmitEeDefaultsComponent } from './payroll-run-review-submit-ee-defaults.component';

describe('PayrollRunReviewSubmitEeDefaultsComponent', () => {
  let component: PayrollRunReviewSubmitEeDefaultsComponent;
  let fixture: ComponentFixture<PayrollRunReviewSubmitEeDefaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunReviewSubmitEeDefaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunReviewSubmitEeDefaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
