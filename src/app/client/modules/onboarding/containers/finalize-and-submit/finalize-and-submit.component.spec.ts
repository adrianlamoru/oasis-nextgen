import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeAndSubmitComponent } from './finalize-and-submit.component';

describe('FinalizeAndSubmitComponent', () => {
  let component: FinalizeAndSubmitComponent;
  let fixture: ComponentFixture<FinalizeAndSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeAndSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeAndSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
