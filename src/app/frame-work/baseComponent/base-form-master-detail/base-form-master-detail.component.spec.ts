import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormMasterDetailComponent } from './base-form-master-detail.component';

describe('BaseFormMasterDetailComponent', () => {
  let component: BaseFormMasterDetailComponent;
  let fixture: ComponentFixture<BaseFormMasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormMasterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
