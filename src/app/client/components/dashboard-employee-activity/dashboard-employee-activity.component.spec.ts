import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmployeeActivityComponent } from './dashboard-employee-activity.component';

describe('DashboardEmployeeActivityComponent', () => {
  let component: DashboardEmployeeActivityComponent;
  let fixture: ComponentFixture<DashboardEmployeeActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmployeeActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmployeeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
