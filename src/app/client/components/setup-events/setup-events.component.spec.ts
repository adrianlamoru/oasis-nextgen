import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEventsComponent } from './setup-events.component';

describe('SetupEventsComponent', () => {
  let component: SetupEventsComponent;
  let fixture: ComponentFixture<SetupEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
