import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordProjectsAndServicesComponent } from './dashbaord-projects-and-services.component';

describe('DashbaordProjectsAndServicesComponent', () => {
  let component: DashbaordProjectsAndServicesComponent;
  let fixture: ComponentFixture<DashbaordProjectsAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbaordProjectsAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordProjectsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
