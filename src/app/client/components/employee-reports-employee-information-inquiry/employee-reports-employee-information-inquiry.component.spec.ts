import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsEmployeeInformationInquiryComponent } from './employee-reports-employee-information-inquiry.component';

describe('EmployeeReportsEmployeeInformationInquiryComponent', () => {
  let component: EmployeeReportsEmployeeInformationInquiryComponent;
  let fixture: ComponentFixture<EmployeeReportsEmployeeInformationInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsEmployeeInformationInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsEmployeeInformationInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
