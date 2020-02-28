import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHrW2AddressChangeComponent } from './reports-hr-w2-address-change.component';

describe('ReportsHrW2AddressChangeComponent', () => {
  let component: ReportsHrW2AddressChangeComponent;
  let fixture: ComponentFixture<ReportsHrW2AddressChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHrW2AddressChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHrW2AddressChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
