import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsSupplementalComponent } from './benefits-supplemental.component';

describe('BenefitsSupplementalComponent', () => {
  let component: BenefitsSupplementalComponent;
  let fixture: ComponentFixture<BenefitsSupplementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsSupplementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsSupplementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
