import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAverageHoursComponent } from './reports-average-hours.component';

describe('ReportsAverageHoursComponent', () => {
  let component: ReportsAverageHoursComponent;
  let fixture: ComponentFixture<ReportsAverageHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsAverageHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsAverageHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
