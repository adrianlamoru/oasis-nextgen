import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunAutopayModalComponent } from './payroll-run-autopay-modal.component';

describe('PayrollRunAutopayModalComponent', () => {
  let component: PayrollRunAutopayModalComponent;
  let fixture: ComponentFixture<PayrollRunAutopayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunAutopayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunAutopayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
