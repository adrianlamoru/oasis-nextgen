import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollGarnishmentsComponent } from './reports-payroll-garnishments.component';

describe('ReportsPayrollGarnishmentsComponent', () => {
  let component: ReportsPayrollGarnishmentsComponent;
  let fixture: ComponentFixture<ReportsPayrollGarnishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollGarnishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollGarnishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
