import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSkillCodeMaintenanceComponent } from './setup-skill-code-maintenance.component';

describe('SetupSkillCodeMaintenanceComponent', () => {
  let component: SetupSkillCodeMaintenanceComponent;
  let fixture: ComponentFixture<SetupSkillCodeMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupSkillCodeMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSkillCodeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
