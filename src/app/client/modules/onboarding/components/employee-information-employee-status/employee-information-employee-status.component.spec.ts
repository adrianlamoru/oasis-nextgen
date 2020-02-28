import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationEmployeeStatusComponent } from './employee-information-employee-status.component';

describe('EmployeeInformationEmployeeStatusComponent', () => {
  let component: EmployeeInformationEmployeeStatusComponent;
  let fixture: ComponentFixture<EmployeeInformationEmployeeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInformationEmployeeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInformationEmployeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
