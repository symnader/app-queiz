import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormSimpleComponent } from './base-form-simple.component';

describe('BaseFormSimpleComponent', () => {
  let component: BaseFormSimpleComponent;
  let fixture: ComponentFixture<BaseFormSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
