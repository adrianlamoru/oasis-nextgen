import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationGarnishmentsComponent } from './compensation-garnishments.component';

describe('CompensationGarnishmentsComponent', () => {
  let component: CompensationGarnishmentsComponent;
  let fixture: ComponentFixture<CompensationGarnishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationGarnishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationGarnishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
