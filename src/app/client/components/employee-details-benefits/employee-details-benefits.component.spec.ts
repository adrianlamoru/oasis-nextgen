import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsBenefitsComponent } from './employee-details-benefits.component';

describe('EmployeeDetailsBenefitsComponent', () => {
  let component: EmployeeDetailsBenefitsComponent;
  let fixture: ComponentFixture<EmployeeDetailsBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
