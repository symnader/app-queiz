import { Component, Input, OnInit } from '@angular/core';
import { IBaseVm } from '../../../fw-models/entities/base-entity';
import { FieldSetting } from '../../../fw-models/kernel/field-setting';
import { FieldValidator } from '../../../fw-models/kernel/field-validator';
import { fwFormGroup } from '../../../fw-services/kernel/forms/form-group';

@Component({
  selector: 'app-base-report',
  templateUrl: './base-report.component.html',
  styleUrls: ['./base-report.component.scss']
})
export class BaseReportComponent implements OnInit {
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
