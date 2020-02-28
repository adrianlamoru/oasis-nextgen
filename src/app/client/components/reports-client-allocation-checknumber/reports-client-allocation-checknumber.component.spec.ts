import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsClientAllocationChecknumberComponent } from './reports-client-allocation-checknumber.component';

describe('ReportsClientAllocationChecknumberComponent', () => {
  let component: ReportsClientAllocationChecknumberComponent;
  let fixture: ComponentFixture<ReportsClientAllocationChecknumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsClientAllocationChecknumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsClientAllocationChecknumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
