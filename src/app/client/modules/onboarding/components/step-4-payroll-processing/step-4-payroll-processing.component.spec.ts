import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4PayrollProcessingComponent } from './step-4-payroll-processing.component';

describe('Step4PayrollProcessingComponent', () => {
  let component: Step4PayrollProcessingComponent;
  let fixture: ComponentFixture<Step4PayrollProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4PayrollProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4PayrollProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
