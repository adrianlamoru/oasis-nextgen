import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationEmployeeTaxesComponent } from './employee-information-employee-taxes.component';

describe('EmployeeInformationEmployeeTaxesComponent', () => {
  let component: EmployeeInformationEmployeeTaxesComponent;
  let fixture: ComponentFixture<EmployeeInformationEmployeeTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeInformationEmployeeTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInformationEmployeeTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
