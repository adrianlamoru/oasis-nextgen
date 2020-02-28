import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileRestrictionsComponent } from './upload-file-restrictions.component';

describe('UploadFileRestrictionsComponent', () => {
  let component: UploadFileRestrictionsComponent;
  let fixture: ComponentFixture<UploadFileRestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileRestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
