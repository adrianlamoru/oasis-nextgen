import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReports401kSummaryByDateComponent } from './employee-reports-401k-summary-by-date.component';

describe('EmployeeReports401kSummaryByDateComponent', () => {
  let component: EmployeeReports401kSummaryByDateComponent;
  let fixture: ComponentFixture<EmployeeReports401kSummaryByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReports401kSummaryByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReports401kSummaryByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
