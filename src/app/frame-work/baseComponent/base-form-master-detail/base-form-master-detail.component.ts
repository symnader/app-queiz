import { Component, Input, OnInit } from '@angular/core';
import { IBaseVm } from '../../models/entities/base-entity';
import { FieldSetting } from '../../models/fw-models/field-setting';
import { FieldValidator } from '../../models/fw-models/field-validator';
import { fwFormGroup } from '../../services/fw-custome/fw-form-group';


@Component({
  selector: 'app-base-form-master-detail',
  templateUrl: './base-form-master-detail.component.html',
  styleUrls: ['./base-form-master-detail.component.css']
})

export class BaseFormMasterDetailComponent implements OnInit {
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
