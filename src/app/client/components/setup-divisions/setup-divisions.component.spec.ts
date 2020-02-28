import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDivisionsComponent } from './setup-divisions.component';

describe('SetupDivisionComponent', () => {
  let component: SetupDivisionsComponent;
  let fixture: ComponentFixture<SetupDivisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupDivisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
