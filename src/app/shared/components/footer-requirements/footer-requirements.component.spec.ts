import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRequirementsComponent } from './footer-requirements.component';

describe('FooterRequirementsComponent', () => {
  let component: FooterRequirementsComponent;
  let fixture: ComponentFixture<FooterRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
