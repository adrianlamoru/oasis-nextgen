import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRecruitmentAndAppTrackingComponent } from './hr-recruitment-and-app-tracking.component';

describe('HrRecruitmentAndAppTrackingComponent', () => {
  let component: HrRecruitmentAndAppTrackingComponent;
  let fixture: ComponentFixture<HrRecruitmentAndAppTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrRecruitmentAndAppTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRecruitmentAndAppTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
