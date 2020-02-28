import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRecurringDeductionsComponent } from './employee-recurring-deductions.component';

describe('EmployeeRecurringDeductionsComponent', () => {
  let component: EmployeeRecurringDeductionsComponent;
  let fixture: ComponentFixture<EmployeeRecurringDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRecurringDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRecurringDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
