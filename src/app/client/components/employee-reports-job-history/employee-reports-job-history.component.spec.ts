import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsJobHistoryComponent } from './employee-reports-job-history.component';

describe('EmployeeReportsJobHistoryComponent', () => {
  let component: EmployeeReportsJobHistoryComponent;
  let fixture: ComponentFixture<EmployeeReportsJobHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsJobHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsJobHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
