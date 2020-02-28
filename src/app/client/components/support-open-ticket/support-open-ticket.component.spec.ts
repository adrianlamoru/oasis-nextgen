import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportOpenTicketComponent } from './support-open-ticket.component';

describe('SupportOpenTicketComponent', () => {
  let component: SupportOpenTicketComponent;
  let fixture: ComponentFixture<SupportOpenTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportOpenTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportOpenTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
