import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListingComponent } from './reports-listing.component';

describe('ReportsListingComponent', () => {
  let component: ReportsListingComponent;
  let fixture: ComponentFixture<ReportsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
