import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationPayStubComponent } from './compensation-pay-stub.component';

describe('CompensationPayStubComponent', () => {
  let component: CompensationPayStubComponent;
  let fixture: ComponentFixture<CompensationPayStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationPayStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationPayStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
