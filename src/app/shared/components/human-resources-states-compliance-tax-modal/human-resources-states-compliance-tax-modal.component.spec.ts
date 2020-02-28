import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesStatesComplianceTaxModalComponent } from './human-resources-states-compliance-tax-modal.component';

describe('HumanResourcesStatesComplianceTaxModalComponent', () => {
  let component: HumanResourcesStatesComplianceTaxModalComponent;
  let fixture: ComponentFixture<HumanResourcesStatesComplianceTaxModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourcesStatesComplianceTaxModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesStatesComplianceTaxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
