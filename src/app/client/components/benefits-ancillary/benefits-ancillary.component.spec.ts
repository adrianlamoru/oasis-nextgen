import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsAncillaryComponent } from './benefits-ancillary.component';

describe('BenefitsAncillaryComponent', () => {
  let component: BenefitsAncillaryComponent;
  let fixture: ComponentFixture<BenefitsAncillaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsAncillaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
