import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGrossNetLastnameComponent } from './reports-gross-net-lastname.component';

describe('ReportsGrossNetLastnameComponent', () => {
  let component: ReportsGrossNetLastnameComponent;
  let fixture: ComponentFixture<ReportsGrossNetLastnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsGrossNetLastnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGrossNetLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
