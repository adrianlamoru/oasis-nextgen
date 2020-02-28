import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAgreementComponent } from './footer-agreement.component';

describe('FooterAgreementComponent', () => {
  let component: FooterAgreementComponent;
  let fixture: ComponentFixture<FooterAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
