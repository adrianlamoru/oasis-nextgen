import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportsGrossNetSortOptionsComponent } from './employee-reports-gross-net-sort-options.component';

describe('EmployeeReportsGrossNetSortOptionsComponent', () => {
  let component: EmployeeReportsGrossNetSortOptionsComponent;
  let fixture: ComponentFixture<EmployeeReportsGrossNetSortOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportsGrossNetSortOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportsGrossNetSortOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
