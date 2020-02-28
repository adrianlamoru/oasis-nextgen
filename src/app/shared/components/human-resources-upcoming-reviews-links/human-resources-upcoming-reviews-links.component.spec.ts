import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesUpcomingReviewsLinksComponent } from './human-resources-upcoming-reviews-links.component';

describe('HumanResourcesUpcomingReviewsLinksComponent', () => {
  let component: HumanResourcesUpcomingReviewsLinksComponent;
  let fixture: ComponentFixture<HumanResourcesUpcomingReviewsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourcesUpcomingReviewsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesUpcomingReviewsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
