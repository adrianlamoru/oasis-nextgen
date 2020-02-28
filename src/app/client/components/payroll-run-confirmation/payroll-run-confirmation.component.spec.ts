import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunConfirmationComponent } from './payroll-run-confirmation.component';

describe('PayrollRunConfirmationComponent', () => {
  let component: PayrollRunConfirmationComponent;
  let fixture: ComponentFixture<PayrollRunConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
