import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGrossToNetSortOptionsComponent } from './reports-gross-to-net-sort-options.component';

describe('ReportsGrossToNetSortOptionsComponent', () => {
  let component: ReportsGrossToNetSortOptionsComponent;
  let fixture: ComponentFixture<ReportsGrossToNetSortOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsGrossToNetSortOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGrossToNetSortOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
