import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGeneralLedgercodesComponent } from './setup-general-ledgercodes.component';

describe('SetupGeneralLedgercodesComponent', () => {
  let component: SetupGeneralLedgercodesComponent;
  let fixture: ComponentFixture<SetupGeneralLedgercodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupGeneralLedgercodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGeneralLedgercodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
