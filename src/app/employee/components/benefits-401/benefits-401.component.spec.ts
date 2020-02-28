import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Benefits401Component } from './benefits-401.component';

describe('Benefits401Component', () => {
  let component: Benefits401Component;
  let fixture: ComponentFixture<Benefits401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Benefits401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Benefits401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
