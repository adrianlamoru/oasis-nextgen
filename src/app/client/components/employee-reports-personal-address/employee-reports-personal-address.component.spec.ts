import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPersonalAddressComponent } from './employee-reports-personal-address.component';

describe('EmployeeReportsPersonalAddressComponent', () => {
  let component: EmployeeReportsPersonalAddressComponent;
  let fixture: ComponentFixture<EmployeeReportsPersonalAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPersonalAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPersonalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
