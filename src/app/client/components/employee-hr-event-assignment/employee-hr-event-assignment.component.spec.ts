import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHrEventAssignmentComponent } from './employee-hr-event-assignment.component';

describe('EmployeeHrEventAssignmentComponent', () => {
  let component: EmployeeHrEventAssignmentComponent;
  let fixture: ComponentFixture<EmployeeHrEventAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHrEventAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHrEventAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
