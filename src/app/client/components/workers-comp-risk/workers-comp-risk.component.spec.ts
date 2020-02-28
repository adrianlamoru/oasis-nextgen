import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompRiskComponent } from './workers-comp-risk.component';

describe('WorkersCompRiskComponent', () => {
  let component: WorkersCompRiskComponent;
  let fixture: ComponentFixture<WorkersCompRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
