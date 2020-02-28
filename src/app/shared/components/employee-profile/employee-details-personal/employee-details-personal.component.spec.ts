import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsPersonalComponent } from './employee-details-personal.component';

describe('EmployeeDetailsPersonalComponent', () => {
  let component: EmployeeDetailsPersonalComponent;
  let fixture: ComponentFixture<EmployeeDetailsPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
