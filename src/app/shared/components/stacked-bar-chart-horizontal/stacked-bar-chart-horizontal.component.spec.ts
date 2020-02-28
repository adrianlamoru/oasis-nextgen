import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarChartHorizontalComponent } from './stacked-bar-chart-horizontal.component';

describe('StackedBarChartHorizontalComponent', () => {
  let component: StackedBarChartHorizontalComponent;
  let fixture: ComponentFixture<StackedBarChartHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBarChartHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBarChartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
