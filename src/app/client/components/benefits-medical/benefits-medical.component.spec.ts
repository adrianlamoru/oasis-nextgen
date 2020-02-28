import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsMedicalComponent } from './benefits-medical.component';

describe('BenefitsMedicalComponent', () => {
  let component: BenefitsMedicalComponent;
  let fixture: ComponentFixture<BenefitsMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
