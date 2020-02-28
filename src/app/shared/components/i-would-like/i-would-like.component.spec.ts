import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWouldLikeComponent } from './i-would-like.component';

describe('IWouldLikeComponent', () => {
  let component: IWouldLikeComponent;
  let fixture: ComponentFixture<IWouldLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWouldLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWouldLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
