import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsScheduledDeductionsComponent } from './employee-reports-scheduled-deductions.component';

describe('EmployeeReportsScheduledDeductionsComponent', () => {
  let component: EmployeeReportsScheduledDeductionsComponent;
  let fixture: ComponentFixture<EmployeeReportsScheduledDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsScheduledDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsScheduledDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
