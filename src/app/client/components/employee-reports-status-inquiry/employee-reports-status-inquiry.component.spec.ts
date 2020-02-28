import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsStatusInquiryComponent } from './employee-reports-status-inquiry.component';

describe('EmployeeReportsStatusInquiryComponent', () => {
  let component: EmployeeReportsStatusInquiryComponent;
  let fixture: ComponentFixture<EmployeeReportsStatusInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsStatusInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsStatusInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
