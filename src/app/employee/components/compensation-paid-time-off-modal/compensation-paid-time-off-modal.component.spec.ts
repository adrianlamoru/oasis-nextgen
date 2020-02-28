import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPaidTimeOffModalComponent } from './compensation-paid-time-off-modal.component';

describe('CompensationPaidTimeOffModalComponent', () => {
  let component: CompensationPaidTimeOffModalComponent;
  let fixture: ComponentFixture<CompensationPaidTimeOffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPaidTimeOffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPaidTimeOffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
