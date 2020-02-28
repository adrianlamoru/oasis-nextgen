import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsWcBillingHistoryComponent } from './reports-wc-billing-history.component';

describe('ReportsWcBillingHistoryComponent', () => {
  let component: ReportsWcBillingHistoryComponent;
  let fixture: ComponentFixture<ReportsWcBillingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsWcBillingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsWcBillingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
