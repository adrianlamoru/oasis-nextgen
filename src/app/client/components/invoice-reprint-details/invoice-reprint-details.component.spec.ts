import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReprintDetailsComponent } from './invoice-reprint-details.component';

describe('InvoiceReprintDetailsComponent', () => {
  let component: InvoiceReprintDetailsComponent;
  let fixture: ComponentFixture<InvoiceReprintDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceReprintDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReprintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
