import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedFeaturedLinksComponent } from './getting-started-featured-links.component';

describe('GettingStartedFeaturedLinksComponent', () => {
  let component: GettingStartedFeaturedLinksComponent;
  let fixture: ComponentFixture<GettingStartedFeaturedLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedFeaturedLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedFeaturedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
