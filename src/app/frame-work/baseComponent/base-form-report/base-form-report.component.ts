import { Component, Input, OnInit } from '@angular/core';
import { IBaseVm } from '../../models/entities/base-entity';
import { FieldSetting } from '../../models/fw-models/field-setting';
import { FieldValidator } from '../../models/fw-models/field-validator';
import { DispatcherService } from '../../services/dispatcher/dispatcher.service';
import { fwFormGroup } from '../../services/fw-custome/fw-form-group';

@Component({
  selector: 'app-base-form-report',
  templateUrl: './base-form-report.component.html',
  styleUrls: ['./base-form-report.component.css']
})

export class BaseFormReportComponent implements OnInit {
  @Input() protected data = {} as IBaseVm;

  protected frmFields: FieldSetting [] = [];
  protected frmValidators: FieldValidator [] = [];
  protected frmToolbarButtons: ToolbarButtons[] = [];
  protected formSetting = {} as FormSetting;
  protected realyFormReport = {} as fwFormGroup;

  protected declareAndCreateFields(): void {}
  protected declareAndCreateValidation(): void {}
  protected declareAndCreateToolbar(): void {}
  protected createFormReport(): void {}

  protected getListHandler(): void {}
  protected getListByFilter(): void {}
  
  constructor() { }
  ngOnInit(): void { }

}
