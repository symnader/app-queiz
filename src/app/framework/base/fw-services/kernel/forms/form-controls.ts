import { FormControl } from "@angular/forms";

export class fwFormControl extends FormControl{
    constructor() {
        super();
    }

    private _fieldParent : FieldParent = fieldParent.none;
    private _bindName : string = '';
    private _errorMessage: string = '';
    private _readOnly : boolean = false;
    private _dataType : FieldDataType = fieldDataTyp.string;
    private _fieldFormat : FieldFormat = fieldFormat.none;
    private _controlType : ControlType = controlTyp.none;

    public get errorMessage() : string {
        return this._errorMessage;
    }

    public set errorMessage(v : string) {
        this._errorMessage = v;
    }

    public get bindName() : string {
        return this._bindName;
    }

    public set bindName(v : string) {
        this._bindName = v;
    }

    public get dataType() : FieldDataType {
        return this._dataType;
    }

    public set dataType(v : FieldDataType) {
        this._dataType = v;
    }

    public get fieldFormat() : FieldFormat {
        return this._fieldFormat;
    }

    public set fieldFormat(v : FieldFormat) {
        this._fieldFormat = v;
    }

    public get controlType() : ControlType {
        return this._controlType;
    }

    public set controlType(v : ControlType) {
        this._controlType = v;
    }

    public get readOnly() : boolean {
        return this._readOnly;
    }

    public set readOnly(v : boolean) {
        this._readOnly = v;
    }

    public get fieldParent() : FieldParent {
        return this._fieldParent;
    }

    public set fieldParent(v : FieldParent) {
        this._fieldParent = v;
    }

}
