export class FieldValidator {
    constructor(min: number, max: number, required: boolean, errMsg: string, vType: ValidationType = validators.none) {        
        this.min = min;
        this.max = max;
        this.required = required;
        this.errorMessage = errMsg;
        this.vType = vType;
    }
    
    min: number = 0;
    max: number = 0;
    required: boolean;
    errorMessage: string;
    vType: ValidationType;
}