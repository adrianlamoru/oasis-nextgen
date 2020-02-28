import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsHrEmployeePersonalInfomationComponent } from './employee-reports-hr-employee-personal-infomation.component';

describe('EmployeeReportsHrEmployeePersonalInfomationComponent', () => {
  let component: EmployeeReportsHrEmployeePersonalInfomationComponent;
  let fixture: ComponentFixture<EmployeeReportsHrEmployeePersonalInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsHrEmployeePersonalInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsHrEmployeePersonalInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
