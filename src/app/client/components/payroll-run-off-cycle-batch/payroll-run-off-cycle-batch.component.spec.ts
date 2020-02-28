import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunOffCycleBatchComponent } from './payroll-run-off-cycle-batch.component';

describe('PayrollRunOffCycleBatchComponent', () => {
  let component: PayrollRunOffCycleBatchComponent;
  let fixture: ComponentFixture<PayrollRunOffCycleBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunOffCycleBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunOffCycleBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
