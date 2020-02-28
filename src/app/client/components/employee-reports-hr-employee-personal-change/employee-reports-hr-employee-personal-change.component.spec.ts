import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsHrEmployeePersonalChangeComponent } from './employee-reports-hr-employee-personal-change.component';

describe('EmployeeReportsHrEmployeePersonalChangeComponent', () => {
  let component: EmployeeReportsHrEmployeePersonalChangeComponent;
  let fixture: ComponentFixture<EmployeeReportsHrEmployeePersonalChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsHrEmployeePersonalChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsHrEmployeePersonalChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
