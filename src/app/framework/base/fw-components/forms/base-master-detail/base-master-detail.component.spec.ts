import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMasterDetailComponent } from './base-master-detail.component';

describe('BaseMasterDetailComponent', () => {
  let component: BaseMasterDetailComponent;
  let fixture: ComponentFixture<BaseMasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseMasterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
