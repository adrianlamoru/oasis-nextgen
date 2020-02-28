import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompOpenClaimsComponent } from './workers-comp-open-claims.component';

describe('WorkersCompOpenClaimsComponent', () => {
  let component: WorkersCompOpenClaimsComponent;
  let fixture: ComponentFixture<WorkersCompOpenClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompOpenClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompOpenClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
