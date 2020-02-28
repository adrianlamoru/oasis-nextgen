import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsClientBenefitSummaryComponent } from './reports-client-benefit-summary.component';

describe('ReportsClientBenefitSummaryComponent', () => {
  let component: ReportsClientBenefitSummaryComponent;
  let fixture: ComponentFixture<ReportsClientBenefitSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsClientBenefitSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsClientBenefitSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
