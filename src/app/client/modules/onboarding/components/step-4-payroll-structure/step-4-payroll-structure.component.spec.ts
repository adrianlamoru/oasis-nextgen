import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4PayrollStructureComponent } from './step-4-payroll-structure.component';

describe('Step4PayrollStructureComponent', () => {
  let component: Step4PayrollStructureComponent;
  let fixture: ComponentFixture<Step4PayrollStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step4PayrollStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4PayrollStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
