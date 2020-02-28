import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCalendarComponent } from './payroll-calendar.component';

describe('PayrollCalendarComponent', () => {
  let component: PayrollCalendarComponent;
  let fixture: ComponentFixture<PayrollCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
