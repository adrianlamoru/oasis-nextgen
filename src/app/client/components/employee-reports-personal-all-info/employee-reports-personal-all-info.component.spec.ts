import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalAllInfoComponent } from './employee-reports-personal-all-info.component';

describe('EmployeeReportsPersonalAllInfoComponent', () => {
  let component: EmployeeReportsPersonalAllInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalAllInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalAllInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
