import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupProjectsComponent } from './setup-projects.component';

describe('SetupProjectComponent', () => {
  let component: SetupProjectsComponent;
  let fixture: ComponentFixture<SetupProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
