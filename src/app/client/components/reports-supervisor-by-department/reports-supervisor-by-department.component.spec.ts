import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSupervisorByDepartmentComponent } from './reports-supervisor-by-department.component';

describe('ReportsSupervisorByDepartmentComponent', () => {
  let component: ReportsSupervisorByDepartmentComponent;
  let fixture: ComponentFixture<ReportsSupervisorByDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSupervisorByDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSupervisorByDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
