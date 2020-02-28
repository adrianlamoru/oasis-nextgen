import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsDetailComponent } from './benefits-detail.component';

describe('BenefitsDetailComponent', () => {
  let component: BenefitsDetailComponent;
  let fixture: ComponentFixture<BenefitsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
