import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonLinkComponent } from './edit-button-link.component';

describe('EditButtonLinkComponent', () => {
  let component: EditButtonLinkComponent;
  let fixture: ComponentFixture<EditButtonLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditButtonLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
