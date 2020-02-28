import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollInformationComponent } from './payroll-information.component';

describe('PayrollInformationComponent', () => {
  let component: PayrollInformationComponent;
  let fixture: ComponentFixture<PayrollInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
