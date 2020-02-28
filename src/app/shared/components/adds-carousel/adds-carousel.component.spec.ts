import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsCarouselComponent } from './adds-carousel.component';

describe('AddsCarouselComponent', () => {
  let component: AddsCarouselComponent;
  let fixture: ComponentFixture<AddsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
