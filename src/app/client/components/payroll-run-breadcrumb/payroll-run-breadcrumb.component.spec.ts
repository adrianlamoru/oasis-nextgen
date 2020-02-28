import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRunBreadcrumbComponent } from './payroll-run-breadcrumb.component';

describe('PayrollRunBreadcrumbComponent', () => {
  let component: PayrollRunBreadcrumbComponent;
  let fixture: ComponentFixture<PayrollRunBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollRunBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollRunBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
