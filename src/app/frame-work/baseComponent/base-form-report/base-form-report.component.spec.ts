import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormReportComponent } from './base-form-report.component';

describe('BaseFormReportComponent', () => {
  let component: BaseFormReportComponent;
  let fixture: ComponentFixture<BaseFormReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFormReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
