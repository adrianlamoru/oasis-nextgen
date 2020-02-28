import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOsha300LogComponent } from './reports-osha-300-log.component';

describe('ReportsOsha300LogComponent', () => {
  let component: ReportsOsha300LogComponent;
  let fixture: ComponentFixture<ReportsOsha300LogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsOsha300LogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsOsha300LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
