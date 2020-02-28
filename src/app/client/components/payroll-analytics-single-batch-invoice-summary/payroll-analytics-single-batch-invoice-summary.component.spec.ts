/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollAnalyticsSingleBatchInvoiceSummaryComponent } from './payroll-analytics-single-batch-invoice-summary.component';

describe('PayrollAnalyticsSingleBatchInvoiceSummaryComponent', () => {
  let component: PayrollAnalyticsSingleBatchInvoiceSummaryComponent;
  let fixture: ComponentFixture<PayrollAnalyticsSingleBatchInvoiceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAnalyticsSingleBatchInvoiceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAnalyticsSingleBatchInvoiceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
