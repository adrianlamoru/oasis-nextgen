/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobCostingDeparmentsComponent } from './job-costing-deparments.component';

describe('JobCostingDeparmentsComponent', () => {
  let component: JobCostingDeparmentsComponent;
  let fixture: ComponentFixture<JobCostingDeparmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCostingDeparmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCostingDeparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
