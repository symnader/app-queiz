import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSimpleComponent } from './base-simple.component';

describe('BaseSimpleComponent', () => {
  let component: BaseSimpleComponent;
  let fixture: ComponentFixture<BaseSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
