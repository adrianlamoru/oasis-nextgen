import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPtoHoursTakenComponent } from './employee-reports-pto-hours-taken.component';

describe('EmployeeReportsPtoHoursTakenComponent', () => {
  let component: EmployeeReportsPtoHoursTakenComponent;
  let fixture: ComponentFixture<EmployeeReportsPtoHoursTakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPtoHoursTakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPtoHoursTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
