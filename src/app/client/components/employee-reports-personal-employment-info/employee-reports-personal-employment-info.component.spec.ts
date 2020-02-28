import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalEmploymentInfoComponent } from './employee-reports-personal-employment-info.component';

describe('EmployeeReportsPersonalEmploymentInfoComponent', () => {
  let component: EmployeeReportsPersonalEmploymentInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalEmploymentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalEmploymentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalEmploymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
