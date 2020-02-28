import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsWagesEarningsComponent } from './employee-reports-wages-earnings.component';

describe('EmployeeReportsWagesEarningsComponent', () => {
  let component: EmployeeReportsWagesEarningsComponent;
  let fixture: ComponentFixture<EmployeeReportsWagesEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsWagesEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsWagesEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
