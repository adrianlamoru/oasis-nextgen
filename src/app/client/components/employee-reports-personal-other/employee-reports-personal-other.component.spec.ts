import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalOtherComponent } from './employee-reports-personal-other.component';

describe('EmployeeReportsPersonalOtherComponent', () => {
  let component: EmployeeReportsPersonalOtherComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
