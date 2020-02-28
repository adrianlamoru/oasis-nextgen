import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEarningsSummaryComponent } from './reports-earnings-summary.component';

describe('ReportsEarningsSummaryComponent', () => {
  let component: ReportsEarningsSummaryComponent;
  let fixture: ComponentFixture<ReportsEarningsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEarningsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEarningsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
