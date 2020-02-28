import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { My401kComponent } from './my-401k.component';

describe('My401kComponent', () => {
  let component: My401kComponent;
  let fixture: ComponentFixture<My401kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My401kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My401kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
