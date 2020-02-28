import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OasisLoaderComponent } from './oasis-loader.component';

describe('OasisLoaderComponent', () => {
  let component: OasisLoaderComponent;
  let fixture: ComponentFixture<OasisLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OasisLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OasisLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
