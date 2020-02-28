import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsCollegeSavingsComponent } from './benefits-college-savings.component';

describe('BenefitsCollegeSavingsComponent', () => {
  let component: BenefitsCollegeSavingsComponent;
  let fixture: ComponentFixture<BenefitsCollegeSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsCollegeSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsCollegeSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
