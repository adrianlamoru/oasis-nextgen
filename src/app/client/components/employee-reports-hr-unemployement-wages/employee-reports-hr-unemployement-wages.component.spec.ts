import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsHrUnemployementWagesComponent } from './employee-reports-hr-unemployement-wages.component';

describe('EmployeeReportsHrUnemployementWagesComponent', () => {
  let component: EmployeeReportsHrUnemployementWagesComponent;
  let fixture: ComponentFixture<EmployeeReportsHrUnemployementWagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsHrUnemployementWagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsHrUnemployementWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
