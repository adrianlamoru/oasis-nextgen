import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsOrientationComponent } from './benefits-orientation.component';

describe('BenefitsOrientationComponent', () => {
  let component: BenefitsOrientationComponent;
  let fixture: ComponentFixture<BenefitsOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
