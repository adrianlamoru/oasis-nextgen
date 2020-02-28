import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsWagesEarningsComponent } from './reports-wages-earnings.component';

describe('ReportsWagesEarningsComponent', () => {
  let component: ReportsWagesEarningsComponent;
  let fixture: ComponentFixture<ReportsWagesEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsWagesEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsWagesEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
