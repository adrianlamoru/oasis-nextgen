import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4PayrollReportsComponent } from './step-4-payroll-reports.component';

describe('Step4PayrollReportsComponent', () => {
  let component: Step4PayrollReportsComponent;
  let fixture: ComponentFixture<Step4PayrollReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4PayrollReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4PayrollReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
