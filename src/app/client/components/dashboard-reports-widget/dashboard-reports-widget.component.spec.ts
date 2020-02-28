import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReportsWidgetComponent } from './dashboard-reports-widget.component';

describe('DashboardReportsWidgetComponent', () => {
  let component: DashboardReportsWidgetComponent;
  let fixture: ComponentFixture<DashboardReportsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardReportsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardReportsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
