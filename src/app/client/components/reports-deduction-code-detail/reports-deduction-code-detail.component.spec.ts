import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDeductionCodeDetailComponent } from './reports-deduction-code-detail.component';

describe('ReportsDeductionCodeDetailComponent', () => {
  let component: ReportsDeductionCodeDetailComponent;
  let fixture: ComponentFixture<ReportsDeductionCodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDeductionCodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDeductionCodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
