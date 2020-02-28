import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRequirementsEmployeeComponent } from './footer-requirements-employee.component';

describe('FooterRequirementsEmployeeComponent', () => {
  let component: FooterRequirementsEmployeeComponent;
  let fixture: ComponentFixture<FooterRequirementsEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRequirementsEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRequirementsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
