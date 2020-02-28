import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOnboardingComponent } from './manager-onboarding.component';

describe('ManagerOnboardingComponent', () => {
  let component: ManagerOnboardingComponent;
  let fixture: ComponentFixture<ManagerOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
