import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationDetailsSubnavComponent } from './compensation-details-subnav.component';

describe('CompensationDetailsSubnavComponent', () => {
  let component: CompensationDetailsSubnavComponent;
  let fixture: ComponentFixture<CompensationDetailsSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationDetailsSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationDetailsSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
