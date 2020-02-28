/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayrollAnalyticsBreadcrumbComponent } from './payroll-analytics-breadcrumb.component';

describe('PayrollAnalyticsBreadcrumbComponent', () => {
  let component: PayrollAnalyticsBreadcrumbComponent;
  let fixture: ComponentFixture<PayrollAnalyticsBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAnalyticsBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAnalyticsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
