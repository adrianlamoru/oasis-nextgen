import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegalEmployeeComponent } from './footer-legal-employee.component';

describe('FooterLegalEmployeeComponent', () => {
  let component: FooterLegalEmployeeComponent;
  let fixture: ComponentFixture<FooterLegalEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLegalEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLegalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
