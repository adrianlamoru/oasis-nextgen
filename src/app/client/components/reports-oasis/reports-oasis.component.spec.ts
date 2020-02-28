import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOasisComponent } from './reports-oasis.component';

describe('ReportsOasisComponent', () => {
  let component: ReportsOasisComponent;
  let fixture: ComponentFixture<ReportsOasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsOasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsOasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
