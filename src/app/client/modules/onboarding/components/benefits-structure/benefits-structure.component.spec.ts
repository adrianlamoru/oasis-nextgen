import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsStructureComponent } from './benefits-structure.component';

describe('BenefitsStructureComponent', () => {
  let component: BenefitsStructureComponent;
  let fixture: ComponentFixture<BenefitsStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
