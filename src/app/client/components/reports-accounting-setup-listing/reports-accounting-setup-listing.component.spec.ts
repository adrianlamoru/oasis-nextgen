import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAccountingSetupListingComponent } from './reports-accounting-setup-listing.component';

describe('ReportsAccountingSetupListingComponent', () => {
  let component: ReportsAccountingSetupListingComponent;
  let fixture: ComponentFixture<ReportsAccountingSetupListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAccountingSetupListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAccountingSetupListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
