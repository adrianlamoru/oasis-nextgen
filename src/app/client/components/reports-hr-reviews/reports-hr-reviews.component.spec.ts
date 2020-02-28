import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHrReviewsComponent } from './reports-hr-reviews.component';

describe('ReportsHrReviewsComponent', () => {
  let component: ReportsHrReviewsComponent;
  let fixture: ComponentFixture<ReportsHrReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHrReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHrReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
