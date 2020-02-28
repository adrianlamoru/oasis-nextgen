import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsReportCreatorComponent } from './reports-report-creator.component';

describe('ReportsReportCreatorComponent', () => {
  let component: ReportsReportCreatorComponent;
  let fixture: ComponentFixture<ReportsReportCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsReportCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReportCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
