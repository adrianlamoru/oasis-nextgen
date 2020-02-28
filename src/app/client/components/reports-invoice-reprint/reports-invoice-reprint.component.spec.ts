import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsInvoiceReprintComponent } from './reports-invoice-reprint.component';

describe('ReportsInvoiceReprintComponent', () => {
  let component: ReportsInvoiceReprintComponent;
  let fixture: ComponentFixture<ReportsInvoiceReprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsInvoiceReprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsInvoiceReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
