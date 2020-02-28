import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeScheduledPaymentsComponent } from './employee-scheduled-payments.component';

describe('EmployeeScheduledPaymentsComponent', () => {
  let component: EmployeeScheduledPaymentsComponent;
  let fixture: ComponentFixture<EmployeeScheduledPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeScheduledPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScheduledPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
