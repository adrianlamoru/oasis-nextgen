import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourcesHandbooksDocumentsComponent } from './human-resources-handbooks-documents.component';

describe('HumanResourcesHandbooksDocumentsComponent', () => {
  let component: HumanResourcesHandbooksDocumentsComponent;
  let fixture: ComponentFixture<HumanResourcesHandbooksDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourcesHandbooksDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourcesHandbooksDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
