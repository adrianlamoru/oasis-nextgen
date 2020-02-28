import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsPtoComponent } from './employee-reports-pto.component';

describe('EmployeeReportsPtoComponent', () => {
  let component: EmployeeReportsPtoComponent;
  let fixture: ComponentFixture<EmployeeReportsPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
