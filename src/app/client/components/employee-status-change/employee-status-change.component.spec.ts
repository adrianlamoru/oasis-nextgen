import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStatusChangeComponent } from './employee-status-change.component';

describe('EmployeeStatusChangeComponent', () => {
  let component: EmployeeStatusChangeComponent;
  let fixture: ComponentFixture<EmployeeStatusChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeStatusChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStatusChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
