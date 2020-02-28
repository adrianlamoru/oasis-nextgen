import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveTrackerComponent } from './my-leave-tracker.component';

describe('MyLeaveTrackerComponent', () => {
  let component: MyLeaveTrackerComponent;
  let fixture: ComponentFixture<MyLeaveTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLeaveTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLeaveTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
