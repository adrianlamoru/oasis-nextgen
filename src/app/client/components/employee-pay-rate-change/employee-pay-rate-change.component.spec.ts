import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayRateChangeComponent } from './employee-pay-rate-change.component';

describe('EmployeePayRateChangeComponent', () => {
  let component: EmployeePayRateChangeComponent;
  let fixture: ComponentFixture<EmployeePayRateChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayRateChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayRateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
