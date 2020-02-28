import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAgreementEmployeeComponent } from './footer-agreement-employee.component';

describe('FooterAgreementEmployeeComponent', () => {
  let component: FooterAgreementEmployeeComponent;
  let fixture: ComponentFixture<FooterAgreementEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAgreementEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAgreementEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
