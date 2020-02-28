import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompClaimDetailsModalComponent } from './workers-comp-claim-details-modal.component';

describe('WorkersCompClaimDetailsModalComponent', () => {
  let component: WorkersCompClaimDetailsModalComponent;
  let fixture: ComponentFixture<WorkersCompClaimDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompClaimDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompClaimDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
