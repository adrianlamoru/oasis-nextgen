import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrOnboardingComponent } from './hr-onboarding.component';

describe('HrOnboardingComponent', () => {
  let component: HrOnboardingComponent;
  let fixture: ComponentFixture<HrOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
