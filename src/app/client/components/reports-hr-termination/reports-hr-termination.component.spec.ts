import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHrTerminationComponent } from './reports-hr-termination.component';

describe('ReportsHrTerminationComponent', () => {
  let component: ReportsHrTerminationComponent;
  let fixture: ComponentFixture<ReportsHrTerminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHrTerminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHrTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
