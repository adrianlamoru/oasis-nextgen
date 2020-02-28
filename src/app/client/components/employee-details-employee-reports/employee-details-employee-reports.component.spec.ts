import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsEmployeeReportsComponent } from './employee-details-employee-reports.component';

describe('EmployeeDetailsEmployeeReportsComponent', () => {
  let component: EmployeeDetailsEmployeeReportsComponent;
  let fixture: ComponentFixture<EmployeeDetailsEmployeeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsEmployeeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsEmployeeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
