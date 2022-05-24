export class FieldSetting {
    constructor(name: string, parent: FieldParent, dType: FieldDataType, bindName: string, format: FieldFormat,
                ctrlType: ControlType,  readOnly: boolean = false) {
        this.name = name;
        this.parent = parent;
        this.dType = dType;
        this.bindName = bindName;
        this.format = format;
        this.ctrlType = ctrlType;
        this.readOnly = readOnly;
    }

    name: string;
    parent: FieldParent;
    dType: FieldDataType;
    bindName: string;
    format: FieldFormat;
    ctrlType: ControlType;
    readOnly: boolean;
}