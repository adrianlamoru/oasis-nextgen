import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDepartmentsComponent } from './setup-departments.component';

describe('SetupDepartmentsComponent', () => {
  let component: SetupDepartmentsComponent;
  let fixture: ComponentFixture<SetupDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
