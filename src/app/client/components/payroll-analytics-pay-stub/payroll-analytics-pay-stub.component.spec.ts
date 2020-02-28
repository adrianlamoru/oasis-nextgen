/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollAnalyticsPayStubComponent } from './payroll-analytics-pay-stub.component';

describe('PayrollAnalyticsPayStubComponent', () => {
  let component: PayrollAnalyticsPayStubComponent;
  let fixture: ComponentFixture<PayrollAnalyticsPayStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAnalyticsPayStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAnalyticsPayStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
