import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollGarnishmentsDocketInfoComponent } from './reports-payroll-garnishments-docket-info.component';

describe('ReportsPayrollGarnishmentsDocketInfoComponent', () => {
  let component: ReportsPayrollGarnishmentsDocketInfoComponent;
  let fixture: ComponentFixture<ReportsPayrollGarnishmentsDocketInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollGarnishmentsDocketInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollGarnishmentsDocketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
