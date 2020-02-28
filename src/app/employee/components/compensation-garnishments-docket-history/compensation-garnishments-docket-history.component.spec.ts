import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationGarnishmentsDocketHistoryComponent } from './compensation-garnishments-docket-history.component';

describe('CompensationGarnishmentsDocketHistoryComponent', () => {
  let component: CompensationGarnishmentsDocketHistoryComponent;
  let fixture: ComponentFixture<CompensationGarnishmentsDocketHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationGarnishmentsDocketHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationGarnishmentsDocketHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
