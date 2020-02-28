import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesStatesComplianceTaxComponent } from './human-resources-states-compliance-tax.component';

describe('HumanResourcesStatesComplianceTaxComponent', () => {
  let component: HumanResourcesStatesComplianceTaxComponent;
  let fixture: ComponentFixture<HumanResourcesStatesComplianceTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourcesStatesComplianceTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesStatesComplianceTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
