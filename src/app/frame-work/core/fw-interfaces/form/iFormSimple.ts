import { fwFormGroup } from "src/app/frame-work/services/fw-custome/fw-form-group";
import { ISimpleFrm } from "../structureType/iSimpleFrm";

export interface IFormSimple extends ISimpleFrm {     
    getObjectFormSimple(): fwFormGroup; 
} 


// setFieldForm(objForm: MyForm, aryFields: MyField[]): void;
// setToolbarForm(objForm: MyForm, aryButton: Toolbar[]): void;
// setDataTypeField(objField: MyField, arySetting: MyFieldSetting): void;
// setValidationField(objField: MyField, aryValidation: MyFieldValidation): void;

// class MyForm {
//     name: string = '';    
// }

// class MyField {
//     name: string = '';
// }

// class MyFieldSetting {    
//     name: string = '';
// }

// class MyFieldValidation {

// }

// class Toolbar {

// }