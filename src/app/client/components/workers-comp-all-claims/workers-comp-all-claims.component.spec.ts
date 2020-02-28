import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompAllClaimsComponent } from './workers-comp-all-claims.component';

describe('WorkersCompAllClaimsComponent', () => {
  let component: WorkersCompAllClaimsComponent;
  let fixture: ComponentFixture<WorkersCompAllClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompAllClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompAllClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
