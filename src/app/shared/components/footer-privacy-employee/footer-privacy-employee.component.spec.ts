import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrivacyEmployeeComponent } from './footer-privacy-employee.component';

describe('FooterPrivacyEmployeeComponent', () => {
  let component: FooterPrivacyEmployeeComponent;
  let fixture: ComponentFixture<FooterPrivacyEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPrivacyEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPrivacyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
