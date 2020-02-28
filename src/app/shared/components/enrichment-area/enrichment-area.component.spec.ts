import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrichmentAreaComponent } from './enrichment-area.component';

describe('EnrichmentAreaComponent', () => {
  let component: EnrichmentAreaComponent;
  let fixture: ComponentFixture<EnrichmentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichmentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichmentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
