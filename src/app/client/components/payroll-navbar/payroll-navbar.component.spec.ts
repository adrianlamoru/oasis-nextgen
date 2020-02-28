import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollNavbarComponent } from './payroll-navbar.component';

describe('PayrollNavbarComponent', () => {
  let component: PayrollNavbarComponent;
  let fixture: ComponentFixture<PayrollNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
