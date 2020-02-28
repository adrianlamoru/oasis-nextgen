import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGrossToNetSortOptionsGridComponent } from './reports-gross-to-net-sort-options-grid.component';

describe('ReportsGrossToNetSortOptionsGridComponent', () => {
  let component: ReportsGrossToNetSortOptionsGridComponent;
  let fixture: ComponentFixture<ReportsGrossToNetSortOptionsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsGrossToNetSortOptionsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGrossToNetSortOptionsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
