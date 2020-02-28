import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsTaxComponent } from './employee-details-tax.component';

describe('EmployeeDetailsTaxComponent', () => {
  let component: EmployeeDetailsTaxComponent;
  let fixture: ComponentFixture<EmployeeDetailsTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
