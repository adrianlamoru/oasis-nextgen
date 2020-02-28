import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksiteUpdateComponent } from './worksite-update.component';

describe('WorksiteUpdateComponent', () => {
  let component: WorksiteUpdateComponent;
  let fixture: ComponentFixture<WorksiteUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksiteUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksiteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
