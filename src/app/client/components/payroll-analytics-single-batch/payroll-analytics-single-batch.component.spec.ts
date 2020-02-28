/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollAnalyticsSingleBatchComponent } from './payroll-analytics-single-batch.component';

describe('PayrollAnalyticsSingleBatchComponent', () => {
  let component: PayrollAnalyticsSingleBatchComponent;
  let fixture: ComponentFixture<PayrollAnalyticsSingleBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAnalyticsSingleBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAnalyticsSingleBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
