import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillCodeAssignmentComponent } from './employee-skill-code-assignment.component';

describe('EmployeeSkillCodeAssignmentComponent', () => {
  let component: EmployeeSkillCodeAssignmentComponent;
  let fixture: ComponentFixture<EmployeeSkillCodeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSkillCodeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSkillCodeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
