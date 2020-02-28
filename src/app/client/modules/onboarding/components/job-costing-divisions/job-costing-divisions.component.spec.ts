/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobCostingDivisionsComponent } from './job-costing-divisions.component';

describe('JobCostingDivisionsComponent', () => {
  let component: JobCostingDivisionsComponent;
  let fixture: ComponentFixture<JobCostingDivisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCostingDivisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCostingDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
