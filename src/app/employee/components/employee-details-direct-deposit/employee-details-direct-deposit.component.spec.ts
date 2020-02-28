import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsDirectDepositComponent } from './employee-details-direct-deposit.component';

describe('EmployeeDetailsDirectDepositComponent', () => {
  let component: EmployeeDetailsDirectDepositComponent;
  let fixture: ComponentFixture<EmployeeDetailsDirectDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsDirectDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsDirectDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
