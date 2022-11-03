import { IFieldProperty } from "./field-property";
import { INumberValidation } from "./number-validation";
import { IStringValidation } from "./string-validation";

export interface IFields extends IFieldProperty, INumberValidation, IStringValidation {
    setFieldProperty(dataType: FieldDataType, bindName: string, format: FieldFormat, controlType: ControlType, readOnly: boolean): void;
}
