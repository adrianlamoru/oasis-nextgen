import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reports401kSummaryByDateComponent } from './reports-401k-summary-by-date.component';

describe('Reports401kSummaryByDateComponent', () => {
  let component: Reports401kSummaryByDateComponent;
  let fixture: ComponentFixture<Reports401kSummaryByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reports401kSummaryByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reports401kSummaryByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
