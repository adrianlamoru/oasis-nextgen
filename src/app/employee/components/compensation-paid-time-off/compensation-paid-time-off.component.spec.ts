import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPaidTimeOffComponent } from './compensation-paid-time-off.component';

describe('CompensationPaidTimeOffComponent', () => {
  let component: CompensationPaidTimeOffComponent;
  let fixture: ComponentFixture<CompensationPaidTimeOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPaidTimeOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPaidTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
