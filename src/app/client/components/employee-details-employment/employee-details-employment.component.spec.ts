import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsEmploymentComponent } from './employee-details-employment.component';

describe('EmployeeDetailsEmploymentComponent', () => {
  let component: EmployeeDetailsEmploymentComponent;
  let fixture: ComponentFixture<EmployeeDetailsEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
