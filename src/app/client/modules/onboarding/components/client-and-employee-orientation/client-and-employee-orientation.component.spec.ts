import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAndEmployeeOrientationComponent } from './client-and-employee-orientation.component';

describe('ClientAndEmployeeOrientationComponent', () => {
  let component: ClientAndEmployeeOrientationComponent;
  let fixture: ComponentFixture<ClientAndEmployeeOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAndEmployeeOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAndEmployeeOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
