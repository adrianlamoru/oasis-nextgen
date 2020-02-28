import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollGarnishmentsHistoryComponent } from './reports-payroll-garnishments-history.component';

describe('ReportsPayrollGarnishmentsHistoryComponent', () => {
  let component: ReportsPayrollGarnishmentsHistoryComponent;
  let fixture: ComponentFixture<ReportsPayrollGarnishmentsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollGarnishmentsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollGarnishmentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
