import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationGarnishmentsDocketReportComponent } from './compensation-garnishments-docket-report.component';

describe('CompensationGarnishmentsDocketReportComponent', () => {
  let component: CompensationGarnishmentsDocketReportComponent;
  let fixture: ComponentFixture<CompensationGarnishmentsDocketReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationGarnishmentsDocketReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationGarnishmentsDocketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
