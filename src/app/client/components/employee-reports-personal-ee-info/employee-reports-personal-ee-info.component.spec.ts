import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalEeInfoComponent } from './employee-reports-personal-ee-info.component';

describe('EmployeeReportsPersonalEeInfoComponent', () => {
  let component: EmployeeReportsPersonalEeInfoComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalEeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalEeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalEeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
