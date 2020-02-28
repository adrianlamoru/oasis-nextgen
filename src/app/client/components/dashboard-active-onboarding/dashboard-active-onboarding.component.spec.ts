import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActiveOnboardingComponent } from './dashboard-active-onboarding.component';

describe('DashboardActiveOnboardingComponent', () => {
  let component: DashboardActiveOnboardingComponent;
  let fixture: ComponentFixture<DashboardActiveOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardActiveOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActiveOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
