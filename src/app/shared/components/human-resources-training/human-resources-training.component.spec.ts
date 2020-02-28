import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesTrainingComponent } from './human-resources-training.component';

describe('HumanResourcesTrainingComponent', () => {
  let component: HumanResourcesTrainingComponent;
  let fixture: ComponentFixture<HumanResourcesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourcesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
