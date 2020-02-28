import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1AuthorizedClientContactsComponent } from './step-1-authorized-client-contacts.component';

describe('Step1AuthorizedClientContactsComponent', () => {
  let component: Step1AuthorizedClientContactsComponent;
  let fixture: ComponentFixture<Step1AuthorizedClientContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1AuthorizedClientContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1AuthorizedClientContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
