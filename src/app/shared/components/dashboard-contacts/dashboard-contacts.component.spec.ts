import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContactsComponent } from './dashboard-contacts.component';

describe('ContactsLeftRailComponent', () => {
  let component: DashboardContactsComponent;
  let fixture: ComponentFixture<DashboardContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
