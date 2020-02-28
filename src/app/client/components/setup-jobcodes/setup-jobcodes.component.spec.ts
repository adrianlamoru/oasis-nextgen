import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupJobcodesComponent } from './setup-jobcodes.component';

describe('SetupJobcodesComponent', () => {
  let component: SetupJobcodesComponent;
  let fixture: ComponentFixture<SetupJobcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupJobcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupJobcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
