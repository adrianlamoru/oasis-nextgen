import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunDeductionsComponent } from './payroll-run-deductions.component';

describe('PayrollRunDeductionsComponent', () => {
  let component: PayrollRunDeductionsComponent;
  let fixture: ComponentFixture<PayrollRunDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
