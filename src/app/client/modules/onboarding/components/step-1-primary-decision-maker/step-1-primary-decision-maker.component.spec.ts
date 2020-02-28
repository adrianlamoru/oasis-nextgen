import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PrimaryDecisionMakerComponent } from './step-1-primary-decision-maker.component';

describe('Step1PrimaryDecisionMakerComponent', () => {
  let component: Step1PrimaryDecisionMakerComponent;
  let fixture: ComponentFixture<Step1PrimaryDecisionMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1PrimaryDecisionMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1PrimaryDecisionMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
