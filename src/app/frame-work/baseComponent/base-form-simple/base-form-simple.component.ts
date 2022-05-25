import { ErrorVm } from './../../models/fw-Vm/error-vm';
import { FieldValidator } from './../../models/fw-models/field-validator';
import { FieldSetting } from './../../models/fw-models/field-setting';
import { IBaseVm } from 'src/app/frame-work/models/entities/base-entity';

import { Component, Input, OnInit } from '@angular/core';
import { fwFormGroup } from '../../services/fw-custome/fw-form-group';
import { DispatcherService } from '../../services/dispatcher/dispatcher.service';


@Component({
    selector: 'app-base-form-simple',
    templateUrl: './base-form-simple.component.html',
    styleUrls: ['./base-form-simple.component.css']
})

export class BaseFormSimpleComponent implements OnInit {
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
