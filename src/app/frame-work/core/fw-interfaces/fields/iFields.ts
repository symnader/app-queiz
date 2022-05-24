import { IStringValidation } from './iStringValidation';
import { INumberValidation } from './iNumberValidation';
import { IFieldProperty } from './iFieldProperty';

export interface IFields extends IFieldProperty, INumberValidation, IStringValidation {
    setFieldProperty(dataType: FieldDataType, bindName: string, format: FieldFormat, controlType: ControlType, readOnly: boolean): void;
}