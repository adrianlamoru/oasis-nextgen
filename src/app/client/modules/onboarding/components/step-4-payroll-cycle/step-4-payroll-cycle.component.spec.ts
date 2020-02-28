import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4PayrollCycleComponent } from './step-4-payroll-cycle.component';

describe('Step4PayrollCycleComponent', () => {
  let component: Step4PayrollCycleComponent;
  let fixture: ComponentFixture<Step4PayrollCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4PayrollCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4PayrollCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
