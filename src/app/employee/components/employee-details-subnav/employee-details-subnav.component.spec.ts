import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsSubnavComponent } from './employee-details-subnav.component';

describe('EmployeeDetailsSubnavComponent', () => {
  let component: EmployeeDetailsSubnavComponent;
  let fixture: ComponentFixture<EmployeeDetailsSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
