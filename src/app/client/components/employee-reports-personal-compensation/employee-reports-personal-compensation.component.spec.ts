import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalCompensationComponent } from './employee-reports-personal-compensation.component';

describe('EmployeeReportsPersonalCompensationComponent', () => {
  let component: EmployeeReportsPersonalCompensationComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalCompensationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalCompensationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
