import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsPtoSummaryComponent } from './employee-details-pto-summary.component';

describe('EmployeeDetailsPtoSummaryComponent', () => {
  let component: EmployeeDetailsPtoSummaryComponent;
  let fixture: ComponentFixture<EmployeeDetailsPtoSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsPtoSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsPtoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
