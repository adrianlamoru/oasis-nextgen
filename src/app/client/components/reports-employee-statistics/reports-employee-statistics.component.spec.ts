import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEmployeeStatisticsComponent } from './reports-employee-statistics.component';

describe('ReportsEmployeeStatisticsComponent', () => {
  let component: ReportsEmployeeStatisticsComponent;
  let fixture: ComponentFixture<ReportsEmployeeStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsEmployeeStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEmployeeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
