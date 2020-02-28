import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunCheckMemoModalComponent } from './payroll-run-check-memo-modal.component';

describe('PayrollRunCheckMemoModalComponent', () => {
  let component: PayrollRunCheckMemoModalComponent;
  let fixture: ComponentFixture<PayrollRunCheckMemoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollRunCheckMemoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunCheckMemoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
