import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsDocumentsComponent } from './employee-details-documents.component';

describe('EmployeeDetailsDocumentsComponent', () => {
  let component: EmployeeDetailsDocumentsComponent;
  let fixture: ComponentFixture<EmployeeDetailsDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
