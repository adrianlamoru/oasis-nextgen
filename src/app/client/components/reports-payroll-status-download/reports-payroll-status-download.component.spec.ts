import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPayrollStatusDownloadComponent } from './reports-payroll-status-download.component';

describe('ReportsPayrollStatusDownloadComponent', () => {
  let component: ReportsPayrollStatusDownloadComponent;
  let fixture: ComponentFixture<ReportsPayrollStatusDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPayrollStatusDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPayrollStatusDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
