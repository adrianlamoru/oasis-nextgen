import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEmployeeBenefitsRegisterComponent } from './reports-employee-benefits-register.component';

describe('ReportsEmployeeBenefitsRegisterComponent', () => {
  let component: ReportsEmployeeBenefitsRegisterComponent;
  let fixture: ComponentFixture<ReportsEmployeeBenefitsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEmployeeBenefitsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEmployeeBenefitsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
