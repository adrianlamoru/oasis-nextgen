import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsUnpaidEmployeesComponent } from './reports-unpaid-employees.component';

describe('ReportsUnpaidEmployeesComponent', () => {
  let component: ReportsUnpaidEmployeesComponent;
  let fixture: ComponentFixture<ReportsUnpaidEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsUnpaidEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsUnpaidEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
