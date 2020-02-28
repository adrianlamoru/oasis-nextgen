/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobCostingComponent } from './job-costing.component';

describe('JobCostingComponent', () => {
  let component: JobCostingComponent;
  let fixture: ComponentFixture<JobCostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
