import { Component, Input, OnInit } from '@angular/core';
import { IBaseVm } from '../../../fw-models/entities/base-entity';
import { FieldSetting } from '../../../fw-models/kernel/field-setting';
import { FieldValidator } from '../../../fw-models/kernel/field-validator';
import { fwFormGroup } from '../../../fw-services/kernel/forms/form-group';

@Component({
  selector: 'app-base-simple',
  templateUrl: './base-simple.component.html',
  styleUrls: ['./base-simple.component.scss']
})
export class BaseSimpleComponent implements OnInit {
  @Input() protected data = {} as IBaseVm;

  protected frmFields: FieldSetting [] = [];
  protected frmValidators: FieldValidator [] = [];
  protected frmToolbarButtons: ToolbarButtons[] = [];
  protected formSetting = {} as FormSetting;
  protected realySimpleFrm = {} as fwFormGroup;

  protected declareAndCreateFields(): void {}
  protected declareAndCreateValidation(): void {}
  protected declareAndCreateToolbar(): void {}
  protected injectFields(): void {};
  protected injectButtons(): void {};
  protected getInstanceFormSimple(): void {}

  protected insertHandler(): void {}
  protected afterInsert(): void {}

  protected updateHandler(): void {}
  protected afterUpdate(): void {}

  protected deleteHandler(): void {}
  protected afterDelete(): void {}

  constructor() { }
  ngOnInit(): void { }
}
