import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarketplaceComponent } from './dashboard-marketplace.component';

describe('DashboardMarketplaceComponent', () => {
  let component: DashboardMarketplaceComponent;
  let fixture: ComponentFixture<DashboardMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
