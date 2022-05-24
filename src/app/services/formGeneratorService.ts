import { Injectable } from "@angular/core";
import { FieldSetting } from "../frame-work/models/fw-models/field-setting";
import { FieldValidator } from "../frame-work/models/fw-models/field-validator";
import { AgentService } from "../frame-work/services/fw-commonicate/anti-corruption-layer";
import { fwFormGroup } from '../frame-work/services/fw-custome/fw-form-group';

@Injectable({
    providedIn: 'root'
})
export class FormGeneratorService {    
    constructor(private agentService: AgentService) {}   

    private _fieldsFrm = this.agentService.newInstanceField();
    private _formSimple = this.agentService.newInstanceFormSimple();

    private intialFields(aryFields: FieldSetting []) {
        aryFields.forEach(p => {
            this._fieldsFrm.setFieldProperty(p.dType, p.bindName, p.format, p.ctrlType, p.readOnly)
        })
    }

    private initialValidators(aryValidators: FieldValidator []) {
        aryValidators.forEach(p => {
            switch (p.vType) {
                case validators.fromOfNumber:
                    return this._fieldsFrm.setNumberValidator(p.min, p.max, p.required, p.errorMessage);

                case validators.fromOfString:
                    return this._fieldsFrm.setStringValidator(p.min, p.max, p.required, p.errorMessage);
            }
        })
    }

    private initialFormSimple(fromSetting: FormSetting): void {
        let infoPnlField  = this._fieldsFrm.allFields.filter(p => p.fieldParent === fieldParent.infoPnl);
        let fieldPnlField = this._fieldsFrm.allFields.filter(p => p.fieldParent === fieldParent.fieldPnl);
        this._formSimple.setInfoPanel(infoPnlField, fromSetting.styleInfoPanel);
        this._formSimple.setFieldPanel(fieldPnlField, fromSetting.styleFieldPanel);
    }

    public doFieldSetting(aryFields: FieldSetting [], aryValidators: FieldValidator []) {
        this.intialFields(aryFields);
        this.initialValidators(aryValidators);
        this._fieldsFrm.setFieldForm();        
    }

    public doFormSimpleSetting(fromSetting: FormSetting): fwFormGroup {
        this._formSimple.setFormProperty(fromSetting.caption, fromSetting.displayType);
        this.initialFormSimple(fromSetting);

        return this._formSimple.getObjectFormSimple();
    }


    //
    //  this methods class for using programers.
}