import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reports401kSummaryComponent } from './reports-401k-summary.component';

describe('Reports401kSummaryComponent', () => {
  let component: Reports401kSummaryComponent;
  let fixture: ComponentFixture<Reports401kSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reports401kSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reports401kSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
