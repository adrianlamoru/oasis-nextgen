import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalTaxComponent } from './employee-reports-personal-tax.component';

describe('EmployeeReportsPersonalTaxComponent', () => {
  let component: EmployeeReportsPersonalTaxComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
