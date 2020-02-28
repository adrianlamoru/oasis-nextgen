import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNextStepsComponent } from './dashboard-next-steps.component';

describe('DashboardNextStepsComponent', () => {
  let component: DashboardNextStepsComponent;
  let fixture: ComponentFixture<DashboardNextStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNextStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNextStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
