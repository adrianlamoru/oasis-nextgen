import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsStatusDownloadComponent } from './employee-reports-status-download.component';

describe('EmployeeReportsStatusDownloadComponent', () => {
  let component: EmployeeReportsStatusDownloadComponent;
  let fixture: ComponentFixture<EmployeeReportsStatusDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsStatusDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsStatusDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
