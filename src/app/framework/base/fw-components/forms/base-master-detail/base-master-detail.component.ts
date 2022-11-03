import { Component, Input, OnInit } from '@angular/core';
import { IBaseVm } from '../../../fw-models/entities/base-entity';
import { FieldSetting } from '../../../fw-models/kernel/field-setting';
import { FieldValidator } from '../../../fw-models/kernel/field-validator';
import { fwFormGroup } from '../../../fw-services/kernel/forms/form-group';

@Component({
  selector: 'app-base-master-detail',
  templateUrl: './base-master-detail.component.html',
  styleUrls: ['./base-master-detail.component.scss']
})
export class BaseMasterDetailComponent implements OnInit {
  @Input() protected data = {} as IBaseVm;

  protected frmFields: FieldSetting [] = [];
  protected frmValidators: FieldValidator [] = [];
  protected frmToolbarButtons: ToolbarButtons[] = [];
  protected formSetting = {} as FormSetting;
  protected realySimpleFrm = {} as fwFormGroup;

  protected declareAndCreateFields(): void {}
  protected declareAndCreateValidation(): void {}
  protected declareAndCreateToolbar(): void {}
  protected createFormSimple(): void {}

  protected insertHandler(): void {}
  protected updateHandler(): void {}
  protected deleteHandler(): void {}
  protected exportToExcel(): void {}

  constructor() { }
  ngOnInit(): void { }

}
