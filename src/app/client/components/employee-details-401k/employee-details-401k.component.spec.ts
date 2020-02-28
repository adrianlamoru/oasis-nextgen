import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetails401kComponent } from './employee-details-401k.component';

describe('EmployeeDetails401kComponent', () => {
  let component: EmployeeDetails401kComponent;
  let fixture: ComponentFixture<EmployeeDetails401kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetails401kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetails401kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
