import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsPtoComponent } from './employee-details-pto.component';

describe('EmployeeDetailsPtoComponent', () => {
  let component: EmployeeDetailsPtoComponent;
  let fixture: ComponentFixture<EmployeeDetailsPtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsPtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsPtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
