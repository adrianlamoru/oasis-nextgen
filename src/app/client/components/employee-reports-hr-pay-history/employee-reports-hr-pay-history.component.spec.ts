import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsHrPayHistoryComponent } from './employee-reports-hr-pay-history.component';

describe('EmployeeReportsHrPayHistoryComponent', () => {
  let component: EmployeeReportsHrPayHistoryComponent;
  let fixture: ComponentFixture<EmployeeReportsHrPayHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsHrPayHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsHrPayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
