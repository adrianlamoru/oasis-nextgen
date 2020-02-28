import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsEarningsSummaryComponent } from './employee-reports-earnings-summary.component';

describe('EmployeeReportsEarningsSummaryComponent', () => {
  let component: EmployeeReportsEarningsSummaryComponent;
  let fixture: ComponentFixture<EmployeeReportsEarningsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsEarningsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsEarningsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
