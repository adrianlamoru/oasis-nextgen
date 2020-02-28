import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrELearningComponent } from './hr-e-learning.component';

describe('HrELearningComponent', () => {
  let component: HrELearningComponent;
  let fixture: ComponentFixture<HrELearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrELearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
