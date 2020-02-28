import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecurityEmployeeComponent } from './footer-security-employee.component';

describe('FooterSecurityEmployeeComponent', () => {
  let component: FooterSecurityEmployeeComponent;
  let fixture: ComponentFixture<FooterSecurityEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSecurityEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSecurityEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
