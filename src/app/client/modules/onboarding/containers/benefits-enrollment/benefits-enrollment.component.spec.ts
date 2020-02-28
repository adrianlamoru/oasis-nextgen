import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsEnrollmentComponent } from './benefits-enrollment.component';

describe('BenefitsEnrollmentComponent', () => {
  let component: BenefitsEnrollmentComponent;
  let fixture: ComponentFixture<BenefitsEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
