import { Injectable } from '@angular/core';
import { Validators } from "@angular/forms";
import { IFields } from 'src/app/framework/base/_kernel/_fields/fields';
import { fwFormControl } from '../../forms/form-controls';

@Injectable({
  providedIn: 'root'
})
export class FieldsService implements IFields {
  private _field : fwFormControl;
  public  allFields : fwFormControl [] = [];

  public get field() : fwFormControl {
      return this._field;
  }

  public set field(v : fwFormControl) {
      this._field = v;
  }

  constructor() {
      this._field = new fwFormControl();
  }

  setStringValidator(minLength: number, maxLength: number, required: boolean, errorMsg: string): void {
      minLength == 0 ? null : this.field.setValidators(Validators.minLength(minLength));
      maxLength == 0 ? null : this.field.setValidators(Validators.maxLength(maxLength));
      errorMsg === '' || null ? null : this.field.errorMessage = errorMsg;
      required ? this.field.setValidators(Validators.required) : null;
  };

  setNumberValidator(min: number, max: number, required: boolean, errorMsg: string): void {
      min == 0 ? null : this.field.setValidators(Validators.min(min));
      max == 0 ? null : this.field.setValidators(Validators.max(max));
      errorMsg == '' || null ? null : this.field.errorMessage = errorMsg;
      required ? this.field.setValidators(Validators.required) : null;
  };

  setFieldProperty(dataType: FieldDataType, bindName: string, format: FieldFormat, controlType: ControlType, readOnly: boolean): void {
      this.field.dataType = dataType;
      this.field.bindName = bindName;
      this.field.fieldFormat = format;
      this.field.controlType = controlType;
      this.field.readOnly = readOnly;
  };

  setFieldForm(): void {
      this.allFields.push(this._field);
  }
}
